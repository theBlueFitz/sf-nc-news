import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Articles from './Components/Articles';
import Topics from './Components/Topics';
import Home from './Components/Home';
import SingleArticle from './Components/SingleArticle';
import ArticleComments from './Components/ArticleComments';
import { UserContext } from './context/User'
import SetUser from './Components/SetUser';
import { useState } from 'react';
import AddComment from './Components/AddComment';
import ErrorPage from './Components/ErrorPage';


function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{user, setUser}}>

    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path='*' element={<ErrorPage />}/>
          <Route path='/' element={<Home />} />
          <Route path='/articles' element={<Articles  />}/>
          <Route path='/topics' element={<Topics />} />
          <Route path='/articles/:topic' element={<Articles />} />
          <Route path='/article/:article_id' element={<SingleArticle />} />
          <Route path='/:article_id/comments' element={<ArticleComments />} />
          <Route path='/users' element={<SetUser />} />
          <Route path='/:article_id/addcomment' element={<AddComment />} />
        </Routes>
      </BrowserRouter>
    </div>

    </UserContext.Provider>
  );
}

export default App;
