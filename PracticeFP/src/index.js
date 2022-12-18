import {each, go, pipe, map, filter, reduce} from "fxjs";
import * as L from "fxjs/Lazy";
import * as C from "fxjs/Concurrency";
import axios from "axios";

L.map();
const test = (a) => a + 1;
const promiseTest = (a) =>
  new Promise((re) => setTimeout(() => re(a), 1000)).then(a => console.log(a));

console.log(promiseTest(10));

function axiosTest() {
  return axios.get("https://jsonplaceholder.typicode.com/posts/1").then(({ data }) => data).then((a) => console.log(a));
}

console.log(axiosTest());
