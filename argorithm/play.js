const user = {
  chatId: '',
  videoId: '',
};
let chatFlag = false;
let videoFlag = false;
const client = [];


const chatIdPromise = new Promise((resolve, reject) => {
  if (chatFlag) resolve(true);
});

const videoPromise = new Promise((resolve, reject) => {
  if (videoFlag) resolve(true);
});

Promise.all([chatIdPromise, videoPromise]).then((values) => {
  console.log(values);
  client.push(user);
});

