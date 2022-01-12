import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/User";


const Header = () => {
    const [beenClicked, setBeenClicked] = useState(false)

    const handleClick = () => {
        setBeenClicked(!beenClicked);
    }

    const logout = () => {
        setBeenClicked(false);
        setUser((currUser) => {
            const newUser = {...currUser};
            delete newUser.username;
            return newUser;
        } )
    }

    const { user, setUser } = useContext(UserContext);
    return <div className='headercontainer'>
        <h1 className='header'>SF NC-News</h1>
        {!!user.username ? 
    
        <button className='login' onClick={handleClick}>{user.username}<p>Click to logout</p></button>
         :
        <Link to='/users'>
        <button className='login'>Login</button>
        </Link> 
    }
    {beenClicked ? 
    <span className='logoutcheck'>Are you sure? <button onClick={logout}>Yes</button> <button onClick={handleClick}>No</button></span> : 
    null}
    </div>
}

export default Header;