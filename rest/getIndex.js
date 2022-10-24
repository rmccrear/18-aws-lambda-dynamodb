const { v4: uuidv4 } = require('uuid');
const createModels = require('./models');



const { AnimalModel } = createModels();


async function handler(event, context) {
   console.log("EVENT OBJ://///")
   console.log(event)

    const id = event.id;
    console.log(event)
    // const id = 'd656cd18-8ae5-4c29-a8f1-86bfc15be88e';
    let statusCode, body, headers;

    try{
      // const animals = await AnimalModel.query("species").eq("cat").limit(10);
      const animals = await AnimalModel.scan().exec()
      statusCode = 200;
      body = JSON.stringify(animals)
    } catch (e) {
      body={"MyError": e, event, context}
    }

    headers = {'Content-Type': 'application/json'};
    
    return {
        headers,
        statusCode,
        body
      };

}

module.exports = {handler};