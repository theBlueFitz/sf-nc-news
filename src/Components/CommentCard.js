import {useState} from 'react';
import { changeCommentVotes } from '../utils/newsApi';

const CommentCard = ({comment}) => {
    const [votes, setVotes] = useState(comment.votes)
    const [hasVoted, setHasVoted] = useState(0)

    const upVote = () => {
        if (hasVoted < 1) {
            setHasVoted((prevCount) => {
                const newCount = prevCount + 1
                return newCount
            })
            const inc_votes = 1;
            setVotes((votes) => {
                const newVotes = votes + 1;
                return newVotes;
            })
            changeCommentVotes(comment.comment_id, inc_votes)
            .then((res) => {
                setVotes(res)
            })
        }
    }

    const downVote = () => {
        if (hasVoted > -1) {
            setHasVoted((prevCount) => {
                const newCount = prevCount - 1
                return newCount
            })
            const inc_votes = -1;
            setVotes((votes) => {
                const newVotes = votes - 1;
                return newVotes;
            })
            changeCommentVotes(comment.comment_id, inc_votes)
            .then((res) => {
                setVotes(res)
            })
        }
    }

    return <div className='commentcontainer'>
        <p className='commentAuthor'>
            User: {comment.author}
        </p>
        <p className='commentBody'>
            {comment.body}
        </p>
        <p className='commentDate'>
            Posted at: {comment.created_at}
        </p>
        <p className='commentVotes'>
            Votes: {votes} 
            <button onClick={upVote}>🔼</button>
            <button onClick={downVote}>🔽</button>
        </p>
    </div>
}

export default CommentCard;