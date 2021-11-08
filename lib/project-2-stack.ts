import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';

// import * as sqs from '@aws-cdk/aws-sqs';

export class Project2Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new s3.Bucket(this, 'MyFirstBucket', {
      bucketName : 'testbucketfordevops'
    })
   
  }
}
