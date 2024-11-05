import * as cdk from "aws-cdk-lib";
import {aws_s3 as s3} from "aws-cdk-lib";
import {Construct} from "constructs";
import { NagSuppressions } from "cdk-nag";

export class CdkStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const appName = "cdk-template";
        const environment = process.env.ENVIRONMENT ?? "dev";
        const namePrefix = `${appName}-${environment}`;

        const bucket = new s3.Bucket(this, `${namePrefix}-bucket`, {
            enforceSSL: true
        });

        // add an exception to cdk-nag
        NagSuppressions.addResourceSuppressions(bucket, [
            {id: "AwsSolutions-S1", reason: "Access Logs Not Needed"}
        ]);
    }
}
