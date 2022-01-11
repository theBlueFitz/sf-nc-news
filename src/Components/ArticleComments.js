import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getArticleComments } from "../utils/newsApi";
import CommentCard from "./CommentCard";

const ArticleComments = () => {
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
    </div>

}

export default ArticleComments;