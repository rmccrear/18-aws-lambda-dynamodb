# Animal Shelter on Dynamoose

We will have 5 routes on the animal shelter app.


GET /shelter will get all animals in the shelter 

GET /shelter/id will get a particular animal

POST /shelter with body={name, species}
will put a new animal into the shelter

DELETE /shelter/id will remove an animal from the shelter

## Lambda function

Each route has its own Lambda function. The functions live in /rest directory in the code repository and are named according to their HTTP verbs. A build process defined in the package.json file zips them and uploads them to aws.

## DyanomoDb and Dynamoose

The lambda functions accept parameters from the REST API and modify the DynomoDb tables accordingly.

## AWS API Gateway setup.

The AWS API Gateway needs to be set up with an Integration Request to transform the path params into elements in the event object passed to the lambda function.