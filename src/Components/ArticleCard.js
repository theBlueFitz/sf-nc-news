import { Link } from "react-router-dom"

const ArticleCard = ({news}) => {

    

    const bodyTease = news.body.split(' ').slice(0,9).join(' ')

    

    return <div className='articlecontainer'>
        <p className='articleitem1'>
            {news.title}
        </p>
        <p className='articleitem2'>
            {news.author}
        </p>
        <p className='articleitem3'>
            Author: {news.author}
        </p>
        <p className='articleitem4'>
            Published: {news.created_at}
        </p>
        <p className='articleitem5'>
            {bodyTease} ...
        </p>
        <Link to={`/article/${news.article_id}`} className='articleitem6'>
            Read more here!
            </Link> 
    </div>
}

export default ArticleCard