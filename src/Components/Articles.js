import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../utils/newsApi";
import ArticleCard from "./ArticleCard";
import ellipsis from './ellipsis.svg';



const Articles = () => {
    const [articleList, setArticleList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const {topic} = useParams();


    useEffect(() => {
        setIsLoading(true)
        getArticles(topic)
        .then((articles) => {
            setIsLoading(false);
            setArticleList(articles)
        })
    }, [topic])

    return <main className='articles'>
        <h2>{topic} Articles</h2>
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