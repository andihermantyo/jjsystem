const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';
const APP_NAME = 'JJSystem';
const ANDROID_PACKAGE = 'com.andihermantyo.jjsystem';

const getAppName = () => {
  if (IS_DEV) {
    return `${APP_NAME} (Dev)`;
  }

  if (IS_PREVIEW) {
    return `${APP_NAME} (Prev)`;
  }

  return `${APP_NAME}: JJ Poultry Petshop`;
};

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return `${ANDROID_PACKAGE}.dev`;
  }

  if (IS_PREVIEW) {
    return `${ANDROID_PACKAGE}.prev`;
  }

  return ANDROID_PACKAGE;
};

export default ({ config }) => ({
  ...config,
  name: getAppName(),
  slug: 'jjsystem',
  description: 'JJ Poultry Petshop Information System',
  orientation: 'default',
  android: {
    package: getUniqueIdentifier(),
  },
  updates: {
    url: 'https://u.expo.dev/0844e46b-51e1-4e45-8c97-8ea9ad4d1d5f',
  },
  runtimeVersion: {
    policy: 'appVersion',
  },
});
