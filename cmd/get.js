const getHandler = require('../rest/get').handler;

const event = {"id": "147ec4a8-02c4-4d9d-aaeb-caf9232a236f"};
getHandler(event).then((resp)=>{
  console.log(resp)
});

