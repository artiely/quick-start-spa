<template>
  <div class="index">
    <mt-header fixed title="首页"></mt-header>
    <div style="padding-top: 40px">
      <router-link to="/detail">去详情</router-link>
      {{money | currency('￥')}}
      <ul>
        <li v-for="item in dateList">
          <img v-lazy="item.url">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'index',
    data () {
      return {
        money: 12222.256,
        dateList: []
      }
    },
    methods: {
      getData () {
        this.$api.weal().then(res => {
          console.log(res)
          this.dateList = res
        })
      }
    },
    created () {
      this.getData()
    }
  }
</script>
<style>
  image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
  ul{
    list-style:none;
    margin: 0;
    padding: 0;
  }
  img{
    width: 100%;
  }
</style>

