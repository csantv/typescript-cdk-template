#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import {CdkStack} from "../lib/cdk-stack";
import { AwsSolutionsChecks } from "cdk-nag";
import { Aspects } from "aws-cdk-lib";


const app = new cdk.App();
Aspects.of(app).add(new AwsSolutionsChecks({
    verbose: true
}));

const environment = process.env.ENVIRONMENT ?? "dev";
const stackName = `cdk-template-stack-${environment}`;
new CdkStack(app, stackName, {
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION
    },
});
