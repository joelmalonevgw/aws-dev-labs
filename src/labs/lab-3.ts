import AWS from 'aws-sdk'

const TableName = 'Infections'
const IndexName = 'InfectionsByCityDate'
const InputCity = 'Reno'

export async function lab3(): Promise<void> {

    // AWS.config.update({
    //     region: "us-west-2",
    //     // endpoint: "http://localhost:8000"
    //   });

    var docClient = new AWS.DynamoDB.DocumentClient({ region: 'ap-southeast-2' });

    var params = {
        TableName: TableName,
        IndexName,
        KeyConditionExpression: "City = :v_City",
        ExpressionAttributeValues: {
            ":v_City": InputCity
        }
    };

    const result = await docClient.query(params)
        .promise()


    console.log("Query succeeded.", result);
}
