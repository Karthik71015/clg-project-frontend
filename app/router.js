import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('intropage', { path: '/' });
  this.route('intropage', { path: '/*path' });
  this.route('usersignin');
  this.route('usersignup');
  this.route('employeesignup');
  this.route('commonsignup');
  this.route('employeesignin');
  this.route('commonsignin');
  this.route('userdashboard');
});

export default Router;
