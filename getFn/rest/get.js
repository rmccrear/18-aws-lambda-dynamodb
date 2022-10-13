import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "../libs/ddbDocClient.js";

// Set the parameters.
export const params = {
  TableName: "code-fellows-people",
  Key: {
    Employer: "Code Fellows",
    id: "1",
  },
};

const getItem = async () => {
    let item;
  try {
    const data = await ddbDocClient.send(new GetCommand(params));
    item = { item: data.Item, status: "success" }
    console.log("Success :", data.Item);
  } catch (err) {
    item = {item: "not found!!", status: "failure", err}
    console.log("Error", err);
  }
  return item;
};

export default async (event) => {
    // TODO implement
    const item = await getItem()
    const response = {
        statusCode: 200,
      body: JSON.stringify({item}),
    };
    return response;
};
