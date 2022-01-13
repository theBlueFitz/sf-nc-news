import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/User";
import { getUsers } from "../utils/newsApi";


const SetUser = () => {
    const { user, setUser} = useContext(UserContext);
    const [userList, setUserList] = useState([]);
    const [isLoading, setIsLoading] = useState();
    
    useEffect(() => {
        getUsers()
        .then((res) =>
        setUserList(res))
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
        <ul>
            {userList.map((person) => {
                return <li key={person.username} className='selectopic'>
                    {person.username}
                    <button disabled={user.username} value={person.username} onClick={login}>Select User</button>
                    </li>
            })}
        </ul>
    </div>


}

export default SetUser;