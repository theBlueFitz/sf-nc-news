import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../utils/newsApi";
import ArticleCard from "./ArticleCard";
import ellipsis from './ellipsis.svg';



const Articles = () => {
    const [articleList, setArticleList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [order, setOrder] = useState(undefined)
    const [limit, setLimit] = useState(undefined);
    const [sortBy, setSortBy] = useState(undefined);
    const {topic} = useParams();

    useEffect(() => {
        setIsLoading(true)
        getArticles(topic, order, limit, sortBy)
        .then((articles) => {
            setIsLoading(false);
            setArticleList(articles)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [topic, order, limit, sortBy])

    const handleOrder = (event) => {
        setOrder(event.target.value)
    }

    const handleLimit = (event) => {
        setLimit(event.target.value)
    }

    const handleSortBy = (event) => {
        setSortBy(event.target.value)
    }

   

    return <main className='articles'>
        <h2>{topic} Articles</h2>
        <div className='filtrationyBit'>
            Sort by :
        <select name='sort_by' onChange={handleSortBy}>
            <option defaultValue value='created_at'></option>
            <option value='comment_count'>Comment Count</option>
            <option value='votes'>Votes</option>
            <option value='created_at'>Date Created</option>
        </select>
        <p>Order :</p>
        <select name='order' onChange={handleOrder}>
            <option defaultValue value='DESC'></option>
            <option value='ASC'>Ascending</option>
            <option value='DESC'>Descending</option>
        </select>
        <p>Limit :</p>
        <select name='limit' onChange={handleLimit}>
            <option defaultValue value='10'></option>
            <option value='1'>1</option>
            <option value='5'>5</option>
            <option value='20'>20</option>
            <option value='100'>100</option>
            <option value='100000'>None</option>
        </select>
        </div>
        {isLoading ? <div>
            <p>Please wait, loading...</p> 
            <img src={ellipsis} alt='rotating dots'/>
            </div> : 
        <ul className='bulletless'>
                {articleList.map((news) => {
            return <ArticleCard news={news} key={news.article_id} />
        })}

        </ul>
        }
    </main>
}

export default Articles;