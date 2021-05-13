import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios, {delayResponse: 500});

mock.onGet("/auth").reply(200, {
  users: [{ id: 1, name: "John Smith" }],
});

export async function login(){
  const response = await axios.get('/auth');
  return response
}