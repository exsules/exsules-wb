/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'exsules',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    defaultTitle: 'Exsules',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    i18n: {
      defaultLocale: 'en'
    },

    contentSecurityPolicy: {
      'connect-src': "'self' https://exsules.com wss://ws.pusherapp.com",
      'script-src': "'self'",
      'style-src':  "'self' 'unsafe-inline'",
      'font-src': "'self' //d33h4kn6035392.cloudfront.net/",
      'img-src': "'self' //d33h4kn6035392.cloudfront.net/ //dev-social.s3.amazonaws.com/"
    },

    apiEndpoint: 'https://api.exsules.com',

    'ember-simple-auth': {
      base: {
        store: 'session-store:local-storage'
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.apiEndpoint = 'http://localhost:3000';
    ENV.contentSecurityPolicy['connect-src'] += " http://localhost:3000 ws://127.0.0.1:* ws://ws.pusherapp.com";
    ENV.contentSecurityPolicy['img-src'] += " http://localhost:3000";
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
