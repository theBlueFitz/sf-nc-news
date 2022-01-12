import { useContext } from "react";
import { UserContext } from "../context/User";

const CommentCard = ({comment}) => {
    const { user } = useContext(UserContext)

    return <div className='commentcontainer'>
        <p className='commentitem1'>
            {comment.author}
        </p>
        <p className='commentitem2'>
            {comment.body}
        </p>
        <p className='commentitem3'>
            Posted at: {comment.created_at}
        </p>
        <p className='commentitem4'>
            Votes: {comment.votes} 
            <button>🔼</button>
            <button>🔽</button>
        </p>
        {(user.username === comment.author) ? <button className='commentitem5'>Delete</button> : null}
    </div>
}

export default CommentCard;