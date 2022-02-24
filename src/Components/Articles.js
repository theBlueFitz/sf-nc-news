import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../utils/newsApi";
import ArticleCard from "./ArticleCard";
import ellipsis from './ellipsis.svg';



const Articles = () => {
    const [totalcount, setTotalCount] = useState(0)
    const [articleList, setArticleList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [order, setOrder] = useState(undefined)
    const [limit, setLimit] = useState(10);
    const [sortBy, setSortBy] = useState(undefined);
    const [p, setP] = useState(0)
    const {topic} = useParams();
    console.log(totalcount)

    useEffect(() => {
        setIsLoading(true)
        getArticles(topic, order, limit, sortBy, p)
        .then((res) => {
            setIsLoading(false);
            setTotalCount(res.total_count)
            setArticleList(res.articles)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [topic, order, limit, sortBy, p])

    const handleOrder = (event) => {
        setP(0)
        setOrder(event.target.value)
    }

    const handleLimit = (event) => {
        setP(0)
        setLimit(event.target.value)
    }

    const handleSortBy = (event) => {
        setP(0)
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
        <button 
        disabled = {p === 0}
        onClick={() => {
            setP((currP) => currP - 1)
        }
        }>Previous</button>
        <p>{p + 1}</p>
        <button 
        disabled= {limit * (p+1) >= totalcount}
        onClick={() => {
            setP((currP) => currP + 1)
        }}>Next</button>
    </main>
}

export default Articles;