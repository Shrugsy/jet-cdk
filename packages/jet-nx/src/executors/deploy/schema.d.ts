export interface DeployExecutorSchema {
  'project-dir': string;
  stage?: string;
  stacks?: string[];
  config?: string;
  'out-dir'?: string;
  'deploy-args'?: string;
}
