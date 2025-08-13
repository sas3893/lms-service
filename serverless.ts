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
      DB_HOST: 'localhost',
      DB_PORT: '3306',
      DB_USER: 'root',
      DB_PASS: 'Mylife@531100',
      DB_NAME: 'lms',
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },

  functions: {
    createHowToVideos: {
      handler: 'src/handlers/createHowToVideo.main',
      events: [
        {
          httpApi: {
            path: '/lms/createHowToVideos',
            method: 'post',
          },
        },
      ],
    },
    getHowToVideos: {
      handler: 'src/handlers/getHowToVideos.main',
      events: [
        {
          httpApi: {
            path: '/lms/getHowToVideos',
            method: 'get',
          },
        },
      ],
    },
    updateHowToVideo: {
      handler: 'src/handlers/updateHowToVideo.main',
      events: [
        {
          httpApi: {
            path: '/lms/updateHowToVideo/{id}',
            method: 'put',
          },
        },
      ],
    },
    getAnalytics: {
      // handler: 'src/handlers/getAnalytics.main',
      handler: 'src/bootstrap.getAnalytics',
      events: [
        {
          httpApi: {
            path: '/lms/analytics',
            method: 'get',
          },
        },
      ],
    },
  },

  package: { individually: true },

  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node18',
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
