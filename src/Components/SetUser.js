import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/User";
import { getUsers } from "../utils/newsApi";
import ellipsis from './ellipsis.svg';


const SetUser = () => {
    const { user, setUser} = useContext(UserContext);
    const [userList, setUserList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true)
        getUsers()
        .then((res) => {
            setIsLoading(false)
            setUserList(res)
        })
    }, [])

    const login = (e) => {
        setUser((currUser) => {
            const newUser = {...currUser}
            newUser.username = e.target.value
            return newUser;
        })
    }

    return <div className='articles'>
        {user.username ? <span className='userexists'>Please log out first</span> : null}
        {isLoading ? <div>
            {console.log('loading')}
            <p>Please wait, loading...</p> 
            <img src={ellipsis} alt='rotating dots'/>
            </div> :
            <ul>
            {userList.map((person) => {
                return <li key={person.username}>
                    <hr size='5px'/>
                    {person.username}
                    <button disabled={user.username} value={person.username} onClick={login}>Select User</button>
                    <hr size='5px'/>
                    </li>
            })}
            </ul>    
        }
    </div>
    }


export default SetUser;