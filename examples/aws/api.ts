import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

export interface MyApiArgs {
  environment: pulumi.Input<string>;
  ecsCluster: pulumi.Input<string>;
}

export class MyApi extends pulumi.ComponentResource {
  constructor(
    name: string,
    args: MyApiArgs,
    opts?: pulumi.ComponentResourceOptions
  ) {
    super("examples:aws:MyApi", name, args, opts);

    const targetGroup = new aws.alb.TargetGroup(`${name}-tg`, {
      targetType: "ip",
      healthCheck: {
        path: "/health",
      },
    });

    const lb = new awsx.lb.ApplicationLoadBalancer(
      `${name}-api`,
      {
        defaultTargetGroup: targetGroup.arn,
      },
      { parent: this }
    );

    const service = new awsx.ecs.FargateService(
      `${name}-api`,
      {
        cluster: args.ecsCluster,
        taskDefinitionArgs: {
          containers: {
            api: {
              name: "api",
              image: "my-repo/my-api:latest",
              memory: 512,
              portMappings: [{ containerPort: 80 }],
            },
          },
        },
        loadBalancers: [
          {
            targetGroupArn: targetGroup.arn,
            containerName: "api",
            containerPort: 80,
          },
        ],
        desiredCount: 2,
      },
      { parent: this }
    );
  }
}
