import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/User";
import { postComment } from "../utils/newsApi";


const AddComment = () => {
    const {article_id} = useParams();
    const {user} = useContext(UserContext);
    const [comment, setComment] = useState({
        username: user.username,
        body: ''
    })
    const [hasPosted, setHasPosted] = useState(false);

    const handleChange = (event) => {
        setComment((currComment) => {
            const updatedComment = {...currComment};
            currComment[event.target.name] = event.target.value;
            return updatedComment;
        })
    }
    const handleSubmit = (event) => {
            event.preventDefault();
            postComment(article_id, comment)
            .then(() => {
                setComment(() => {
                    const newComment = {
                        username: user.username,
                        body: ''
                    }
                    return newComment;
                })
                setHasPosted(true)
            })

    }

    return <>
    {hasPosted ? <h2>Congratulations, comment posted successfully</h2> :
    <form className='addComment' onSubmit={handleSubmit}>
        <h2>Add Comment</h2>
        <h3>Insert comment here:</h3>
        <textarea name='body' className='commentinput' onChange={handleChange}></textarea>
        <button disabled={comment.body.length < 1 || !user.username} type='submit'>Submit</button>
    </form>
    
    }
    </>
}

export default AddComment;