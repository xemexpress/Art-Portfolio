import superagentPromise from 'superagent-promise'
import _superagent from 'superagent'

var superagent = superagentPromise(_superagent, global.Promise)

const API_ROOT = 'http://localhost:3000/api'

const responseBody = res => res.body

const requests = {
  get: url =>
    superagent.get(`${API_ROOT}${url}`).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).then(responseBody)
}

const Articles = {
  all: page =>
    requests.get(`/articles?limit=10`)
}

const Units = {
  fromCollection: slug => 
    requests.get(`/collections/${slug}/units`)
}

const Message = {
  send: (messager, message) =>
    requests.post('/about', { mail: { messager, message } }) 
}

export default {
  Articles,
  Units,
  Message
}
