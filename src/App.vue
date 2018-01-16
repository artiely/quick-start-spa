<template>
  <div id="app">
    <transition :name="transitionName" :mode="inout?'in-out':''">
      <keep-alive>
        <router-view class="RouterView"/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'slide-left',
      inout: true
    }
  },
  watch: {
    '$route': {
      handler(val, oval) {
        let isBack = this.$router.isBack
        console.log(isBack)
        if (isBack) {
          this.inout = false
          this.transitionName = 'slide-right'
          if (val.path === '/login') {
            this.$router.push('/index')
          }
        } else {
          this.inout = true
          this.transitionName = 'slide-left'
        }
        this.$router.isBack = false
      }
    }
  }
}
</script>

<style lang="less">

.index{
  background: rgb(241, 62, 62);
}
.find{
  background: rgb(62, 241, 151);
}
.order{
  background: rgb(14, 80, 110);
}
.user{
  background: rgb(241, 223, 62);
}
</style>
