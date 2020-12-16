const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ])
    .postCss('resources/css/cover.css', 'public/css', [
        //
    ])
    .postCss('/var/www/html/appsguru/tunescloud-ui/node_modules/bootstrap/dist/css/bootstrap.min.css',
        'public/css', [
    //
]).sourceMaps()
    .js('/var/www/html/appsguru/tunescloud-ui/node_modules/jquery/dist/jquery.min.js', 'public/js')
    .js('/var/www/html/appsguru/tunescloud-ui/node_modules/popper.js/dist/popper.min.js', 'public/js')
    .js('/var/www/html/appsguru/tunescloud-ui/node_modules/bootstrap/dist/js/bootstrap.min.js', 'public/js')
    .sourceMaps();


