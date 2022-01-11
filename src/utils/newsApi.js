import axios from 'axios';

const newsAPI = axios.create({
    baseURL: 'https://nc-news-sf.herokuapp.com/api'
});

export const getArticles = (topic) => {
    let path = '/articles?limit=1000'
    if(topic) {
        path += `&topic=${topic}`
    }
    return newsAPI.get(path)
    .then((news) => {
        return news.data.articles;
    })
}

export const getTopics = () => {
    return newsAPI.get('/topics')
    .then((news) => news.data.topics)
}

export const getSingleArticle = (article_id) => {
    return newsAPI.get(`/articles/${article_id}`)
    .then((res)=> {
        return res.data.article;
    })
}

export const getArticleComments = (article_id) => {
    return newsAPI.get(`/articles/${article_id}/comments`)
    .then((res) => {
        return res.data.comments;
    })
}

export const changeArticleVotes = (article_id, inc_votes) => {
    return newsAPI.patch(`/articles/${article_id}`, {inc_votes})
    .then((res) => {
        return res.data.article.votes;
    })
}