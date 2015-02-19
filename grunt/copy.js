module.exports = {
  all: {
    files: [
      {
        expand: true,
        src: ['src/fonts/*'],
        dest: 'dist/fonts/',
        flatten: true,
        filter: 'isFile'
      },
      {
        expand: true,
        src: ['src/php/*'],
        dest: 'dist/',
        flatten: true,
        filter: 'isFile'
      },
      {
        expand: true,
        src: ['src/html/*'],
        dest: 'dist/',
        flatten: true,
        filter: 'isFile'
      }
    ]
  }
};