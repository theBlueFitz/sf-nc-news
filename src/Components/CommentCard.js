const CommentCard = ({comment}) => {

    

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
            Votes: {comment.votes} 
            <button>🔼</button>
            <button>🔽</button>
        </p>
    </div>
}

export default CommentCard;