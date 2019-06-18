module.exports = {
  styles: {
    watch: ['sass/**/*.scss'],
    source: ['sass/*.scss'],
    destination: 'css/',
    options: {
      outputStyle: 'expanded',
      includePaths: ['./node_modules']
    }
  },
  scripts: {
    watch: ['ts/*.ts'],
    source: ['ts/*.ts'],
    destination: 'js/'
  },
  svg: {
    source: 'images/svg/**/*.svg',
    destination: 'images/svg/'
  },
  stylelint: {
    options: {
      reporters: [
        {
          formatter: 'string',
          console: true
        }
      ]
    },
    optionsTest: {
      reporters: [
        {
          formatter: 'string',
          console: true,
          failAfterError: true
        }
      ]
    }
  },
  eslint: {
    options: {
      fix: false,
      configFilePath:'./.eslintrc'
    }
  },
  browserSync: {
    proxy: 'http://local.lofi.com/',
    open: true,
    xip: false,
    logConnections: false
  }
};
