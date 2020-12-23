require('./bootstrap');

require('alpinejs');
window.Vue= require('vue');
Vue.component('hello',require('./components/Hello.vue').default)
Vue.component('test',require('./components/Test.vue').default)
new Vue({
    el:"#app",
})
