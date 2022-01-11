import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Articles from './Components/Articles';
import Topics from './Components/Topics';
import Home from './Components/Home';
import SingleArticle from './Components/SingleArticle';
import ArticleComments from './Components/ArticleComments';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/articles' element={<Articles  />}/>
          <Route path='/topics' element={<Topics />} />
          <Route path='/articles/:topic' element={<Articles />} />
          <Route path='/article/:article_id' element={<SingleArticle />} />
          <Route path='/:article_id/comments' element={<ArticleComments />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
