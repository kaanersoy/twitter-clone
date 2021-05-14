import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import store from '@/store'
import {userOneAuthInfo, users} from './mockdata'

const mock = new MockAdapter(axios, {delayResponse: 500});

mock.onPost("/auth", userOneAuthInfo).reply(200, {user: users[0]});

async function request(settings){
  store.commit("setLoadingStatus", true)
  if(settings.body){
    const response = await axios[settings.type](settings.path, settings.body);
    store.commit("setLoadingStatus", false)
    return response;
  }
  const response = await axios[settings.type](settings.path);
  store.commit("setLoadingStatus", false)
  return response;
}

export async function login(body){
  return request({type: 'post', path: '/auth', body})
}
