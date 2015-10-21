import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import config from 'exsules/config/environment';

export default OAuth2PasswordGrant.extend({
  serverTokenRevocationEndpoint: config.apiEndpoint + '/oauth/revoke',
  serverTokenEndpoint: config.apiEndpoint + '/oauth/token'
});