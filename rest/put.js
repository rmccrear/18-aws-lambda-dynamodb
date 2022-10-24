const { v4: uuidv4 } = require('uuid');
const createModels = require('./models');



const { AnimalModel } = createModels();



async function handler(event) {
    // const id = Math.floor((Math.random()*1000000));
    let statusCode, body, headers;
    console.log(event)
    const id = event.params.path["animalId"];
    try{
      const paramName = event['body-json'].name;
      const paramSpecies = event['body-json'].species;
      const animalObj = {}
      if(paramName) animalObj.name = paramName;
      if(paramSpecies) animalObj.species = paramSpecies
      const resp = await AnimalModel.update(id, animalObj)

      statusCode = 200;
      body = JSON.stringify(resp);
    } catch(e){
      statusCode = 500;
      body = e;
    }

    headers = {'Content-Type': 'application/json'};
    body = event;
    
    return {
        statusCode,
        body,
        headers
      };

}


module.exports = {handler}
