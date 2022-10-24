const postHandler = require('../rest/post').handler;

const event = {};
postHandler(event).then((resp)=>{
  console.log(resp)
});

