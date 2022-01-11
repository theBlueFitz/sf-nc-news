import axios from 'axios';

const newsAPI = axios.create({
    baseURL: 'https://nc-news-sf.herokuapp.com/api'
});

export const getArticles = () => {
    return newsAPI.get('/articles')
    .then((articles) => {
        return articles.data.articles;
    })
}