<template>
  <div class="find">
    <mt-header fixed title="详情">
      <mt-button icon="back" slot="left" @click="back"></mt-button>
    </mt-header>

  </div>
</template>

<script>
  export default {
    name: 'find',
    data () {
      return {}
    },
    methods: {
      back () {
        this.$router.back()
      }
    }
  }
</script>

