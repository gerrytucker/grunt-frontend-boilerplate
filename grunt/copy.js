module.exports = {
  all: {
    files: [
      {
        expand: true,
        src: ['src/copy/*'],
        dest: 'dist/',
        flatten: true,
        filter: 'isFile'
      }
    ]
  }
};