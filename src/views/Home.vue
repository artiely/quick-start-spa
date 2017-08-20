<template>
  <div class="home">
    <transition :name="transitionName" appear>
      <router-view class="router-view"></router-view>
    </transition>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="1">
        <i class="iconfont " :class="selected =='1'?'icon-live_fill':'icon-live'" slot="icon"></i>
        首页
      </mt-tab-item>
      <mt-tab-item id="2">
        <i class="iconfont" :class="selected =='2'?'icon-label_fill':'icon-label'" slot="icon"></i>
        订单
      </mt-tab-item>
      <mt-tab-item id="3">
        <i class="iconfont" :class="selected =='3'?'icon-like_fill':'icon-like'" slot="icon"></i>
        发现
      </mt-tab-item>
      <mt-tab-item id="4">
        <i class="iconfont" :class="selected =='4'?'icon-collection_fill':'icon-collection'"
           slot="icon"></i>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        selected: '1',
        transitionName: 'slide-left'
      }
    },
    watch: {
      selected: {
        handler (val, oldVal) {
          switch (val) {
            case '1':
              this.$router.push('/index')
              break
            case '2':
              this.$router.push('/order')
              break
            case '3':
              this.$router.push('/find')
              break
            case '4':
              this.$router.push('/user')
              break
          }
          if (val > oldVal) {
            this.transitionName = 'slide-left'
          } else {
            this.transitionName = 'slide-right'
          }
        }
      }
    }
  }
</script>

