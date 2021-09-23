import { DevExecutorSchema } from './schema';
import { flight } from '@jet-cdk/jet/flight';

export default async function runExecutor(options: DevExecutorSchema) {
  try {
    await flight({
      command: 'dev',
      stage: options.stage,
      config: options.config,
      outDir: options['out-dir'],
      synthArgs: options['synth-args']?.split(' '),
      deployArgs: options['deploy-args']?.split(' '),
    });
    return {
      success: true,
    };
  } catch (e) {
    return {
      success: false,
    };
  }
}
