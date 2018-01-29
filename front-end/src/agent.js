import superagentPromise from 'superagent-promise'
import _superagent from 'superagent'

import {
  API_ROOT,
  PER_PAGE
} from './constants'

var superagent = superagentPromise(_superagent, global.Promise)

const responseBody = res => res.body

const requests = {
  get: url =>
    superagent.get(`${API_ROOT}${url}`).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).then(responseBody)
}

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`

const Articles = {
  all: page =>
    requests.get(`/articles?${limit(PER_PAGE, page)}`)
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
