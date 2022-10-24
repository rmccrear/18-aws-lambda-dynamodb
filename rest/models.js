require('dotenv').config()
const dynamoose = require("dynamoose");

function createModels(){
  const animalSchema = new dynamoose.Schema({
      id: String,
      name: String,
      species: String
  });
  
  const AnimalModel = dynamoose.model("animalShelter2", animalSchema,{"create": false, "waitForActive": false});
  return {AnimalModel};
}

module.exports = createModels;