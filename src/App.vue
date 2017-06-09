<template>
  <div id="app">
    <Row class="admin-header">
        <Col span="3" push="2">
          <div class="admin-logo">
            <img src="./image/logo.png" alt="logo" width="66" height="52"/>
          </div>
        </Col>
        <Col span="3" push="17">
          <div class="user-info">
            <div class="avatar">
              <img src="./image/logo.png" alt="用户头像" width="66" height="52"/>
              <i class="arrow-down"></i>
              <span class="user-name">233</span>
            </div>
          </div>
        </Col>
    </Row>
    <Row>
      <Col span="24">
        <router-view></router-view>
      </Col>
    </Row>
  </div>
</template>

<script>
  import {Row, Col} from 'iview'
  export default {}
</script>
<style lang="stylus" scoped>
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    .admin-header
      background-color #FDFAE1
      height 70px
      .admin-logo
        height 100%
    .user-info
      font-size 0
      .avatar
        width 80%
        text-align center
        line-height 70px
      img,.arrow-down,.user-name
        display inline-block
      .user-name
        width 50px
        height 100%
</style>
