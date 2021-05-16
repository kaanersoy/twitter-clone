export default class {
  constructor(userData){
    this.id = userData.id,
    this.username = userData.username,
    this.password = userData.password,
    this.profile = userData.profile,
    this.account = userData.account,
    this.createdAt = new Date().getTime()
  }
}