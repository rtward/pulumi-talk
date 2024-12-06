import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";
import { MyApi } from "./api";

const config = new pulumi.Config();
const environment = config.require("environment");

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.BucketV2("my-bucket");

const dbInstanceClass = environment === "prod" ? "db.r5.large" : "db.t3.micro";
const db = new aws.rds.Cluster("db", {
  engine: "aurora-mysql",
  dbClusterInstanceClass: dbInstanceClass,
});

const ecsCluster = new aws.ecs.Cluster("app-cluster", {});

const apiOne = new MyApi("api-one", {
  ecsCluster: ecsCluster.arn,
  environment,
});

const apiTwo = new MyApi("api-two", {
  ecsCluster: ecsCluster.arn,
  environment,
});

// Export the name of the bucket
export const bucketName = bucket.id;
export const dbEndpoint = db.endpoint;
