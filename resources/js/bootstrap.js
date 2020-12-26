//import jQuery from "jquery";
//window.jQuery = window.$ = jQuery

//window.$ = window.jQuery = require('jquery')

import Promise from 'bluebird';

import Echo from 'laravel-echo';

window._ = require('lodash');


/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');



window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Common app config
 */
window.axios.defaults.rootURL = "http://127.0.0.1:8001/"
window.axios.defaults.baseURL = 'http://127.0.0.1:8001/api';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */



window.Pusher = require('pusher-js');
window.Pusher.logToConsole = true;
window.Echo = new Echo({
    authEndpoint: window.axios.defaults.rootURL + "broadcasting/auth",
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER
    // forceTLS: true
});

window.Helpers = require('./scripts/common/helpers');

