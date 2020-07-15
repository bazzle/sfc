module.exports = function(grunt) {

  require("jit-grunt")(grunt);

  grunt.initConfig({
    'dart-sass': {
      options: {
        sourceMap: true
      },
      files: {
        src: "build/css/main.scss",
        dest: "assets/css/main.css"
      }
    },
    postcss: {
      prod: {
        options: {
          processors: [
            require("autoprefixer"),
            require("cssnano")(), // minify the result
          ]
        },
        src: "build/css/main.scss",
        dest: "assets/css/main.css"
      }
    },
    svgstore: {
      options: {
        includedemo: false
      },
      files: {
        src: 'assets/svg/*.svg',
        dest: 'build/svg/icons.svg',
      },
    },
    browserify: {
        default: {
          src: 'assets/scripts/main.js',
          dest: 'build/scripts/main.js',
          options: {
              browserifyOptions: { debug: true },
              transform: [["babelify", { "presets": ["@babel/preset-env"] }]],
          }
      }
    },
    browserSync: {
        dev: {
            bsFiles: {
                src : [
                    "**/*.php",
                    "assets/css/*.css",
                    "assets/scripts/main.js"
                ]
            },
            options: {
                watchTask: true,
                proxy: "http://sfc.local/"
            }
        }
    },
    watch: {
      css: {
        files: ["build/css/**/*.scss"],
        tasks: ["dart-sass"]
      },
      scripts: {
        files: ["assets/scripts/**/*.js"],
        tasks: ["browserify"]
      }
    }
  });
  grunt.registerTask("svg", [
    "svgstore","browserSync", "watch"

  ]);
  grunt.registerTask("dev", [
    "browserSync", "watch"
  ]);
  grunt.registerTask("build", [
    "postcss:prod"
  ]);
};