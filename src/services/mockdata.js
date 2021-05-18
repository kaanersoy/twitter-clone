import User from '../models/User'

const userData = [
  {
    id: '12a1s3dz24c635q2e213a2dw1',
    username: 'kaanersoy',
    password: 'password',
    profile: {
      pic: 'https://pbs.twimg.com/profile_images/1344794962697793537/GYEm82zC_normal.jpg',
      pic_full: 'https://pbs.twimg.com/profile_images/1344794962697793537/GYEm82zC_400x400.jpg',
      pic_cover: 'https://pbs.twimg.com/profile_banners/1142171408916762624/1605471218/1500x500',
      description: 'Somedescription goes there...',
      nickname: '@kaanersoy',
      name: 'Kaan Ersoy',
      website: 'https://kaanersoy.com'
    },
    account: {
      followingCount: '515',
      followerCount: '152'
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

export const tweets = []

export const trends = [
  {
    name: '#Salı',
    tweetsCount: 155614
  },
  {
    name: '#ProductHunt',
    tweetsCount: 121353
  },
  {
    name: '#DummyTrend',
    tweetsCount: 90420
  }
]