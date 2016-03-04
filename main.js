
var Vue = require('vue');

new Vue({
  el: 'body',
  components: {
    material: require('./Material.vue'),
    navbar: require('./Navbar.vue'),
    'navbar-dropdown': require('./NavbarDropdown.vue')
  }
});
