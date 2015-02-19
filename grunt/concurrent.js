module.exports = {
  // Task options
  options: {
    limit: 4
  },

  // Dev tasks
  devFirst: [
    'clean'
  ],
  devSecond: [
    'sass:dev',
    'uglify',
    'copy'
  ],

  // Production tasks
  prodFirst: [
    'clean'
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
