<template>
  <div id="app">
    <transition :name="transitionName">
    <keep-alive>
      <router-view/>
    </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'slide-left'
    }
  },
    watch: {
    '$route': {
      handler(val, oval) {
        let isBack = this.$router.isBack
        if (isBack) {
          this.transitionName = 'leave'
          if (val.path === '/login') {
            this.$router.push('/index')
          }
        } else {
          this.transitionName = 'enter'
        }
        this.$router.isBack = false
      }
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.slide-left-enter {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(0, 0);
  transform: translate(0 0);
}
.slide-left-leave-active {
  opacity: 0;
  -webkit-transform: translate(0, 0);
  transform: translate(0 0);
}
</style>
