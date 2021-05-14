import Tweet from '@/models/Tweet'
import User from '../models/User'

const userData = [
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

export const users = [
  new User(userData[0])
]

export const userOneAuthInfo = {
  username: userData[0].username,
  password: userData[0].password
}

export const tweets = [
  new Tweet(users[0], 'CONTNETETNNETETETN'),
  new Tweet(users[0], 'CONTNETETNNETETETN'),
]