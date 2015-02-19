module.exports = {
  // Task options
  options: {
    limit: 4
  },

  // Dev tasks
  devFirst: [
    'clean',
    'mkdir'
  ],
  devSecond: [
    'sass:dev',
    'uglify',
    'copy'
  ],

  // Production tasks
  prodFirst: [
    'clean',
    'mkdir'
  ],
  prodSecond: [
    'sass:prod',
    'uglify',
    'copy'
  ],

  // Image tasks
  imgFirst: [
    'imagemin'
  ],

  // GitHub Pages tasks
  ghpagesFirst: [
    'gh-pages'
  ]
};
