import AWS from 'aws-sdk'

//AWS.config.setPromisesDependency(Promise);

export async function lab2(): Promise<void> {

    const s3 = new AWS.S3()

    const outputBucket = await s3.createBucket({ Bucket: 'joel-lab-2-output-bucket' })
        .promise()

}
