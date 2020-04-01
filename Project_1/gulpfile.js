const gulp = require("gulp");
const sass = require ("gulp-sass");
const uglifyjs = require("gulp-uglifyjs");
const browsersync = require("browser-sync").create();
//const watch = require ('gulp-watch');


const gulpConfig = {
    path : {
        dev : {
            html : "./dev/*.html",
            sass : "./dev/assets/sass/main.scss",
            js : "./dev/assets/js/main.js",
            images : "./dev/assets/images/**/*",
        },
        dest : {
            html : "./dest/",
            css : "./dest/assets/css",
            js : "./dest/assets/js",
            images : "./dst/assets/images",
        },
        watch : {
            html: "./dev/**/*.html",
            sass: "./dev/assets/sass/**/*.scss",
            js: "./dev/assets/js/**/*.js",
            images: "./dev/assets/images/**/*.*",
        }, 
    },
};


function buildSass(){
    return gulp.src(gulpConfig.path.dev.sass)
        .pipe(sass())
        .pipe(gulp.dest(gulpConfig.path.dest.css));
};

function buildJs(){
    return gulp.src(gulpConfig.path.dev.js)
        .pipe(uglifyjs())
        .pipe(gulp.dest(gulpConfig.path.dest.js));
};

function buildImages(){
    return gulp.src(gulpConfig.path.dev.images)
        .pipe(gulp.dest(gulpConfig.path.dest.images));
};

function buildHtml(){
    return gulp.src(gulpConfig.path.dev.html)
        .pipe(gulp.dest(gulpConfig.path.dest.html));
};

gulp.task('browser-sync', function(){
    browserSync.init({
        server: {
            baseDir: gulpConfig.path.dest.html //Почему html???
        }
    })
})

gulp.task('watch', function(){
    gulp.watch(gulpConfig.path.watch.html);
    gulp.watch(gulpConfig.path.watch.sass);
    gulp.watch(gulpConfig.path.watch.js);
    gulp.watch(gulpConfig.path.watch.src.images);
})



exports.sass = buildSass;
exports.js = buildJs;
exports.images = buildImages;
exports.html = buildHtml;
exports.watch = watch; 