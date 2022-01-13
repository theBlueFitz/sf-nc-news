import { Link } from "react-router-dom"

const ArticleCard = ({news}) => {
    const bodyTease = news.body.split(' ').slice(0,9).join(' ')

    return <div className='articlecontainer'>
        <p className='articleTitle'>
            {news.title}
        </p>
        <p className='articleAuthorAvatar'>
            {news.author}
        </p>
        <p className='articleAuthor'>
            Author: {news.author}
        </p>
        <p className='articleDate'>
            Published: {news.created_at}
        </p>
        <p className='articleBodySnip'>
            {bodyTease} ...
        </p>
        <Link to={`/article/${news.article_id}`} className='articleLink'>
            <button>
            Read more here!
            </button>
            </Link> 
        <p className='articleStats'>
            Comment count:{news.comment_count}
            <br></br>
            Votes: {news.votes}
        </p>
    </div>
}

export default ArticleCard