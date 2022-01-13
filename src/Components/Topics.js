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

    return <div className='articles'>
        {isLoading ? <p>Loading, please wait...</p> :
                <ul>
                {allTopics.map((item) => {
                    return <li key={item.slug}>
                        <Link to={`/articles/${item.slug}`} topic={item.slug}>
                            <button>
                                {item.slug}
                        <p>
                            {item.description}
                        </p>
                            </button>
                        </ Link>
                    </li>})
    
                }
            </ul>
        
        }
    </div>
}

export default Topics;