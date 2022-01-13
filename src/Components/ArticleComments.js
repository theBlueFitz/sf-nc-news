import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { UserContext } from "../context/User";
import { deleteComment, getArticleComments } from "../utils/newsApi";
import CommentCard from "./CommentCard";

const ArticleComments = () => {
    const {user} = useContext(UserContext);
    const {article_id} = useParams();
    const [comments, setComments] = useState([]);
    const [hasClicked, setHasClicked] = useState(false)

    

    useEffect(() => {
        setHasClicked(false)
        getArticleComments(article_id)
        .then((res) => {
            setComments(res)
        })
    }, [article_id, hasClicked]);

    const handleDelete = (event) => {
        setHasClicked(true);
        setComments((currComments) => {
            const newComments = [...currComments];
            newComments.filter((comment) => {
                return comment.comment_id !== comment[event.target.value]
            })
            return newComments;
        })
        deleteComment(event.target.value)
    }

    return <div>

        <h2>Comments</h2>
        <ul>
            {comments.map((comment) => {
                return <li key={comment.comment_id}>
                    <CommentCard comment={comment} />
                    {(user.username === comment.author) ? <button className='deleteComment' value={comment.comment_id} onClick={handleDelete}>Delete</button> : null}
                </li> 
            })}
        </ul>
        {user.username ? 
        <Link to={`/${article_id}/addcomment`} className='commentformlink'>
        <button disabled={!user.username}>Add Comment</button>
        </Link>
        :
        <p className='commentformlink'>You must be logged in to comment</p> 
        }

    </div>

}

export default ArticleComments;