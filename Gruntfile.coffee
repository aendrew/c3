path = require('path')

module.exports = (grunt) ->
    require('load-grunt-tasks') grunt, pattern: ['grunt-contrib-*', 'grunt-sass', 'grunt-karma', 'grunt-webpack']

    grunt.initConfig
        watch:
          concat:
            tasks: ['webpack', 'concat']
            files: ['src/*.js']
          sass:
            tasks: 'sass'
            files: ['src/scss/*.scss']

        concat:
          dist:
            src: [
            #   THESE ARE NOW ALL LOADED VIA MODULES WITH WEBPACK!!!
            #
            #   'src/head.js',
            #   'src/core.js',
            #   'src/config.js',
            #   'src/scale.js',
            #   'src/domain.js',
            #   'src/data.js',
            #   'src/data.convert.js',
            #   'src/data.load.js',
            #   'src/category.js',
            #   'src/interaction.js',
            #   'src/size.js',
            #   'src/shape.js',
            #   'src/shape.line.js',
            #   'src/shape.bar.js',
            #   'src/text.js',
            #   'src/type.js',
            #   'src/grid.js',
            #   'src/tooltip.js',
            #   'src/legend.js',
            #   'src/title.js',
            #   'src/axis.js',
            #   'src/clip.js',
            #   'src/arc.js',
            #   'src/region.js',
            #   'src/drag.js',
            #   'src/selection.js',
            #   'src/subchart.js',
            #   'src/zoom.js',
            #   'src/color.js',
            #   'src/format.js',
            #   'src/cache.js',
            #   'src/class.js',
            #   'src/util.js',
            #   'src/api.focus.js',
            #   'src/api.show.js',
            #   'src/api.zoom.js',
            #   'src/api.load.js',
            #   'src/api.flow.js',
            #   'src/api.selection.js',
            #   'src/api.transform.js',
            #   'src/api.group.js',
            #   'src/api.grid.js',
            #   'src/api.region.js',
            #   'src/api.data.js',
            #   'src/api.category.js',
            #   'src/api.color.js',
            #   'src/api.x.js',
            #   'src/api.axis.js',
            #   'src/api.legend.js',
            #   'src/api.chart.js',
            #   'src/api.tooltip.js',
            #   'src/c3.axis.js',
            #   'src/ua.js',
            #   'src/index.js',
            #   'src/tail.js'
              'src/polyfill.js',
              './c3.js'
            ]
            dest: 'c3.js'

        jshint:
          c3: 'c3.js'
          spec: 'spec/*.js'
          options:
            jshintrc: '.jshintrc'

        karma:
          unit:
            configFile: 'karma.conf.js'

        uglify:
          c3:
            files:
              'c3.min.js': 'c3.js'

        cssmin:
          c3:
            src: 'c3.css'
            dest: 'c3.min.css'

        sass:
          options:
            sourcemap: 'none'
          c3:
            files:
              'c3.css': 'src/scss/main.scss'

        webpack:
          c3:
            dest: 'c3.js'
          options:
            entry:
              app: ['./src/index.js']
              output:
                path: path.resolve(__dirname, './src/')
                filename: 'c3.js'
                libraryTarget: 'umd'
                umdNamedDefine: 'c3'
            devtool: 'inline-source-map'

    grunt.registerTask 'lint', ['jshint']
    grunt.registerTask 'test', ['karma']
    grunt.registerTask 'build', ['webpack', 'concat', 'sass']
    grunt.registerTask 'minify', ['cssmin', 'uglify']
    grunt.registerTask 'default', ['lint', 'build', 'test', 'minify']
