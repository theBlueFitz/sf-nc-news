import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { changeArticleVotes, getSingleArticle } from "../utils/newsApi";
import SpecificError from "./SpecificError";


const SingleArticle = () => {
    const [article, setArticle] = useState({});
    const [votes, setVotes] = useState()
    const [error, setError] = useState(null)
    const {article_id} = useParams();
    
    useEffect(() => {
        getSingleArticle(article_id)
        .then((news) => {
            setArticle(news)
            setVotes(news.votes)
        }).catch((err) => {
            setError({err});
        })
    }, [article_id])

    

    const upVote = () => {
        const inc_votes = 1;
        setVotes((votes)=>{
            const newVotes = votes + 1;
            return newVotes;
        })
        changeArticleVotes(article_id, inc_votes)
        .then((res) => {
            setVotes(res)
        })
    }

    const downVote = () => {
        const inc_votes = -1;
        setVotes((votes)=>{
            const newVotes = votes - 1;
            return newVotes
        })
        changeArticleVotes(article_id, inc_votes)
        .then((res) => {
            setVotes(res)
        })
    }

    if (error) {
        return <SpecificError error={error}/>
    } else {

    return <article className='singlearticle'>
    <h2>{article.title}</h2>
    <p>Topic: {article.topic}</p>
    <p>Author: {article.author} | Published: {article.created_at}</p>
    <p>{article.body}</p> 
    <p className='vote'>
        Votes: {votes}
        <button onClick={upVote}>🔼</button>
        <button onClick={downVote}>🔽</button>
    </p>
    <Link to={`/${article_id}/comments`}>
        <button>
            Comments
        </button>
    </Link>
    </article>
    }


}


export default SingleArticle;