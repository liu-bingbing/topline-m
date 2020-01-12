module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // 因为设计稿是375宽，因此这里设置37.5，如果是750宽，就设置为75
      // Vant是基于375宽写的,如果你的设计稿是750宽，测量出的数据都要 / 2
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
