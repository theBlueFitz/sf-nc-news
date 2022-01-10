import { useState } from "react";
import ArticleCard from "./ArticleCard";


const Articles = () => {

    const [articleList, setArticleList] = useState([])

    // const 

    return <main>
        <h2 className='articles'>Articles</h2>
        <ArticleCard />
    </main>
}

export default Articles;