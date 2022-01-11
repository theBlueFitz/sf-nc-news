import { Link } from "react-router-dom";

const Nav = () => {
    return <nav className='nav'>
        <Link to ='/'>
        <button>
            Home
        </button>
        </Link>
        <Link to ='/articles'>
        <button>
            Articles
        </button>
        </Link>
        <Link to='/topics'>
        <button>
            Topics
        </button>
        </Link>
    </nav>
}

export default Nav;