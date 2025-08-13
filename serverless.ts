import 'dotenv/config'; // automatically loads variables from .env
import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'lms-service',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs18.x',
    region: 'ap-south-1',
    environment: {
      DB_HOST: process.env.DB_HOST!,
      DB_PORT: process.env.DB_PORT!,
      DB_USER: process.env.DB_USER!,
      DB_PASS: process.env.DB_PASS!,
      DB_NAME: process.env.DB_NAME!,
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },
  functions: {
    createHowToVideos: { handler: 'src/handlers/createHowToVideo.main' },
    getHowToVideos: { handler: 'src/handlers/getHowToVideos.main' },
    updateHowToVideo: { handler: 'src/handlers/updateHowToVideo.main' },
    getAnalytics: { handler: 'src/handlers/getAnalytics.main' },
  },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node18',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
