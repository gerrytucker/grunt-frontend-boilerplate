module.exports = {
  options: {
    spawn: false
  },
  scripts: {
    files: [
      'src/scripts/*.js'
    ],
    tasks: [
      'uglify'
    ]
  },
  styles: {
    files: [
      'src/styles/*.scss'
    ],
    tasks: [
      'sass:dev'
    ]
  }
};
