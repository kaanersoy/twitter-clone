import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import store from '@/store'
import {userOneAuthInfo, users, tweets} from './mockdata'

const mock = new MockAdapter(axios, {delayResponse: 500});
mock.onPost("/auth", userOneAuthInfo).reply(200, {user: users[0]});
mock.onGet("/tweets").reply(200, {tweets});
mock.onPost("/tweets").reply(function (config) {
  tweets.push(JSON.parse(config.data))
  return [200, tweets]
});

export async function login(body){
  return request({type: 'post', path: '/auth', body})
}

export async function getTweets(){
  return request({type: 'get', path: '/tweets'})
}

export async function uploadTweet(body){
  return request({type: 'post', path: '/tweets', body})
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