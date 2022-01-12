import { getTopics } from "../utils/newsApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Topics = () => {
    const [allTopics, setAllTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        getTopics()
        .then((topics) => {
            setIsLoading(false);
            setAllTopics(topics);
            
        })
    }, [])    

    return <div>
        {isLoading ? <p>Loading, please wait...</p> :
                <ul className='topiclist'>
                {allTopics.map((item) => {
                    return <li key={item.slug} className='selectopic'>
                        <Link to={`/articles/${item.slug}`} topic={item.slug}>
                        {item.slug}
                        </ Link>
                        <p>
                            {item.description}
                        </p>
                    </li>})
    
                }
            </ul>
        
        }
    </div>
}

export default Topics;