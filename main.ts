import { ContainerCluster, GoogleProvider} from "@cdktf/provider-google";
import { App, TerraformStack } from "cdktf";
import { Construct } from "constructs";

const app = new App()

class GCloudStack extends TerraformStack {
  constructor (scope: Construct) {
    super(scope, `stack`);
    new GoogleProvider(this, "google", {zone: "europe-north1-a"})
    new ContainerCluster(this, `cluster`, { name: `cluster`, project: "dschmidt-cdk-test", initialNodeCount: 1})
  }
}

new GCloudStack(app,)

app.synth()