import Ember from 'ember';
import config from 'exsules/config/environment';

const { on } = Ember;

export default Ember.Component.extend({
  parsley: on('didInsertElement', function() {
    this.$('form').parsley();
  }),

  actions: {
    signup() {
      this.set('isWorking', true);
      let data = this.getProperties('email', 'username', 'password');

      return Ember.$.ajax({
        method: "POST",
        url: `${config.apiEndpoint}/users`,
        data: {
          user: data
        }
      }).then(((response) => {
        console.log("Reg success");
        this.set('responseMessage', response.user.message);
        this.set('isWorking', false);
      }), (xhr, status, error) => {
        console.log(`xhr ${xhr} status ${status} error ${error}`);
        this.set('isWorking', false);
      });
    }
  }
});
