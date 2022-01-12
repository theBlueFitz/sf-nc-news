import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { UserContext } from "../context/User";
import { getArticleComments } from "../utils/newsApi";
import CommentCard from "./CommentCard";

const ArticleComments = () => {
    const {user} = useContext(UserContext);
    const {article_id} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getArticleComments(article_id)
        .then((res) => {
            setComments(res)
        })
    }, [article_id]);

    return <div>
        <h2>Comments</h2>
        <ul>
            {comments.map((comment) => {
                return <li key={comment.comment_id}>
                    <CommentCard comment={comment} />
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