import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import store from '@/store'

const mock = new MockAdapter(axios, {delayResponse: 500});

const users = [
  {
    id: '12a1s3dz24c635q2e213a2dw1',
    username: 'kaanersoy',
    password: 'password',
    profile: {
      pic: 'https://pbs.twimg.com/profile_images/1344794962697793537/GYEm82zC_normal.jpg',
      nickname: '@kaanersoy',
      name: 'Kaan Ersoy'
    }
  }
]
const userOneAuthInfo = {
  username: users[0].username,
  password: users[0].password
}

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
