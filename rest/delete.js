const { v4: uuidv4 } = require('uuid');
const createModels = require('./models');



const { AnimalModel } = createModels();


async function handler(event, context) {
   //console.log("EVENT OBJ://///")
   //console.log(event)

    const id = event.params.path["animalId"];

    // const id = 'd656cd18-8ae5-4c29-a8f1-86bfc15be88e';
    let statusCode, body, headers;

    try{
      await AnimalModel.delete(id);
      statusCode = 204;
      body = {id}
    } catch (e) {
      body={"MyError": e}
    }

    headers = {'Content-Type': 'application/json'};
    
    return {
        headers,
        statusCode,
        body
      };

}

module.exports = {handler};