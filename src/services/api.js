import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import store from '@/store'
import {userOneAuthInfo, users, tweets, trends} from './mockdata'

const mock = new MockAdapter(axios, {delayResponse: 250});
mock.onPost("/auth", userOneAuthInfo).reply(200, {user: users[0]});
mock.onGet("/tweets").reply(200, {tweets});
mock.onGet("/trends").reply(200, {trends});
mock.onPost("/tweets").reply(function (config) {
  tweets.unshift(JSON.parse(config.data))
  return [200, tweets]
});

mock.onPatch("/tweets").reply(function (config) {
  const request = JSON.parse(config.data)
  
  const requestedTweet = tweets.find(twt => twt.id == request.id);
  const requestedIndex = tweets.indexOf(requestedTweet);

  tweets[requestedIndex].content = request.content;

  return [200, {
    message: 'Tweet is editted succesfully',
    id: request.id
  }]
});

mock.onDelete("/tweets").reply(function (config) {
  const tweetId = config.tweetId

  const findedTweet = tweets.find(twt => twt.id == tweetId)
  const indexOfTweet = tweets.indexOf(findedTweet)

  tweets.splice(indexOfTweet, 1);

  return [200, {
    message: 'Deleted successfully',
    tweetId
  }]
});

mock.onPost("/me", {id: users[0].id}).reply(200, users[0]);

mock.onGet(`/tweets/${users[0].id}`).reply(function() {
  return [200, {
    tweets: tweets.filter(twt => twt.author.id == users[0].id)
  }]
});

mock.onPut('/me').reply(function (config) {
  const request = JSON.parse(config.data)

  const me = users.find(usr => usr.id == store.getters.getMyProfileId)
  const myIndex = users.indexOf(me);

  Object.keys(request).map(key => {
    users[myIndex].profile[key] = request[key]
  })

  const response = {
    message: 'Editted succesfully!',
    updatedProfile: users[myIndex].profile
  }
  return [200, response]
})


export async function login(body){
  return request({type: 'post', path: '/auth', body})
}

export async function getTweets(){
  return request({type: 'get', path: '/tweets'})
}

export async function getTrends(){
  return request({type: 'get', path: '/trends'})
}

export async function getMe(body){
  return request({type: 'post', path: '/me', body})
}

export async function uploadTweet(body){
  return request({type: 'post', path: '/tweets', body})
}

export async function deleteTweet(body){
  return request({type: 'delete', path: '/tweets', body})
}

export async function updateTweet(body){
  return request({type: 'patch', path: '/tweets', body})
}

export async function getUsersTweets(body){
  return request({type: 'get', path: `/tweets/${body.id}`})
}


export async function setProfileInfo(body){
  return request({type: 'put', path: `/me`, body})
}



async function request(settings){
  store.commit("setLoadingStatus", true)
  try {
    if(settings.body){
      const response = await axios[settings.type](settings.path, settings.body);
      store.commit("setLoadingStatus", false)
      return response;
    }
    const response = await axios[settings.type](settings.path);
    store.commit("setLoadingStatus", false)
    return response;
  }catch(err) {
    store.commit("setLoadingStatus", false)
    throw err
  }
}