var gulp = require('gulp'),
    elixir = require('laravel-elixir'),
    apidoc = require('gulp-apidoc');

gulp.task('apidoc', function (done) {
    apidoc({
        src: "./",
        dest: "apidoc/",
        debug: true,
        includeFilters: ["vendor/nanokaweb/async-game/src/Api/.*"]
    }, done);
});

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
    mix.sass('app.scss');
    mix.task('apidoc', ['vendor/nanokaweb/async-game/src/Api/**/**', 'apidoc.json']);
});
