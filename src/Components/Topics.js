import { getTopics } from "../utils/newsApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Topics = () => {
    const [allTopics, setAllTopics] = useState([]);

    useEffect(() => {
        getTopics()
        .then((topics) => {
            setAllTopics(topics)
        })
    }, [])

   

    
       
    

    return <ul className='topiclist'>
        {allTopics.map((item) => {
            return <li key={item.slug} className='selectopic'>
                <Link to={`/articles/${item.slug}`} topic={item.slug}>
                {item.slug}
                </ Link>
                <p>
                    {item.description}
                </p>
            </li>

        })}
    </ul>
}

export default Topics;