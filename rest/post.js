const { v4: uuidv4 } = require('uuid');
const createModels = require('./models');



const { AnimalModel } = createModels();



async function handler(event) {
    // const id = Math.floor((Math.random()*1000000));
    let statusCode, body, headers;
    console.log('starting')
    console.log(event)
    console.log(AnimalModel.name)
    const id = uuidv4();
    console.log(id)
    const animalObj = {"id": id, name: event.name, species: event.species};
    const animal = new AnimalModel(animalObj)

    
    body="body"
    const resp = await animal.save();
    statusCode = 200;
    body = JSON.stringify(resp);

    headers = {'Content-Type': 'application/json'};
    
    return {
        statusCode,
        body,
        headers
      };

}


module.exports = {handler}
