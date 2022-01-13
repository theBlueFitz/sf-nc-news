import axios from 'axios';

const newsAPI = axios.create({
    baseURL: 'https://nc-news-sf.herokuapp.com/api'
});

export const getArticles = (topic, order, limit, sort_by) => {
    console.log({sort_by})
    return newsAPI.get('/articles', {params: {topic: topic, order: order, limit:limit, sort_by: sort_by}})
    .then((news) => {
        return news.data.articles;
    })
    .catch((err) => {
        console.dir(err)
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

export const getArticleComments = (article_id, limit=1000) => {
    return newsAPI.get(`/articles/${article_id}/comments`, {params: {limit}})
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

export const getUsers = () => {
    return newsAPI.get('/users')
    .then((res) => {
        return res.data.users;
    })
}

export const postComment = (article_id, comment) => {
    return newsAPI.post(`/articles/${article_id}/comments`, comment)
    .then((res) => {
        return res;
    })
}

export const deleteComment = (comment_id) => {
    return newsAPI.delete(`/comments/${comment_id}`)
    .then((res) => {
        console.log(res);
    })
}