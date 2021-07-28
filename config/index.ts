export type EnvName =
  | 'prod'
  | 'staging'
  | 'dev'
  | 'api-test'
  | 'press'
  | 'test';

export type Config = {
  env: EnvName;
  host: {
    [key: string]: string;
  };
  domain: string;
};

type Configs = {
  [key in EnvName]: Config;
};

export const configs: Configs = {
  dev: {
    env: 'dev',
    host: {
      tiger: 'https://backend-dev.codemao.cn',
      platform: 'https://dev-open-service.codemao.cn',
    },
    domain: '.codemao.cn',
  },
  staging: {
    env: 'staging',
    host: {
      tiger: 'https://backend-test.codemao.cn',
      platform: 'https://staging-open-service.codemao.cn',
    },
    domain: '.codemao.cn',
  },
  prod: {
    env: 'prod',
    host: {
      tiger: 'https://api.codemao.cn',
      platform: 'https://open-service.codemao.cn',
    },
    domain: '.codemao.cn',
  },
  'api-test': {
    env: 'api-test',
    host: {
      tiger: 'https://test-api.codemao.cn',
      platform: 'https://test-open-service.codemao.cn',
    },
    domain: '.codemao.cn',
  },
  test: {
    env: 'test',
    host: {
      tiger: 'https://test-api.codemao.cn',
      platform: 'https://test-open-service.codemao.cn',
    },
    domain: '.codemao.cn',
  },
  press: {
    env: 'press',
    host: {
      tiger: 'https://press-api.codemao.cn',
      platform: 'https://press-open-service.codemao.cn',
    },
    domain: '.codemao.cn',
  },
};
