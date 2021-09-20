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

mix.react('resources/js/app.js', 'public/js')
    .copy('resources/assets/favicon.ico', 'public/favicon.ico') // Fevicon Icon
    .copy('resources/assets/logo192.png', 'public/logo192.png') // Logo Image
    .copy('resources/assets/logo512.png', 'public/logo512.png') // Logo Image
    .copy('resources/assets/manifest.json', 'public/manifest.json') // manifest file
    .copyDirectory('resources/assets/images', 'public/images') // Copy all images from resources to public folder
    .copyDirectory('resources/assets/vendors', 'public/vendors'); // Feather Icon fonts;


mix.webpackConfig({
    node: {
        fs: "empty"
    },
    resolve: {
        alias: {
            "handlebars" : "handlebars/dist/handlebars.js"
        }
    },
    output: {
        chunkFilename: 'js/chunks/[name].js',
    }
});

