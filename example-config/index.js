/**
 * 引入通用配置
 * 具体详情请见：https://phab.srv.codemao.cn/source/codemaster-mlz-config/
 */
// const mlzConfig = require('@frontend/mlz-config').config();

// console.log(process.env.front_env, '🚗 front_env');
// module.exports = mlzConfig;

const configs = {
  local: {
    cdnPath: '/',
    runtime: {
      iris_env: 'dev',
    },
  },
  development: {
    cdnPath: 'https://static-platform.codemao.cn/iris/',
    runtime: {
      iris_env: 'dev',
    },
  },
  test: {
    cdnPath: 'https://static-platform.codemao.cn/iris/',
    runtime: {
      iris_env: 'api-test',
    },
  },
  staging: {
    cdnPath: 'https://static-platform.codemao.cn/iris/',
    runtime: {
      iris_env: 'staging',
    },
  },
  production: {
    cdnPath: 'https://static-platform.codemao.cn/iris/',
    runtime: {
      iris_env: 'prod',
    },
  },
};

const env = process.env.front_env || 'local';

const config = {
  ...configs[env],
  originServer: {
    port: 5000,
  },
};

module.exports = config;
