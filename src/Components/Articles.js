import { useEffect, useState } from "react";
import { getArticles } from "../utils/newsApi";
import ArticleCard from "./ArticleCard";


const Articles = () => {

    const [articleList, setArticleList] = useState([])

    useEffect(() => {
        getArticles()
        .then((articles) => {
            setArticleList(articles)
        })
    }, [])

    console.log(articleList, '<<<<');

    return <main>
        <h2 className='articles'>Articles</h2>
        <ArticleCard />
    </main>
}

export default Articles;