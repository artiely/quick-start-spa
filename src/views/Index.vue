<template>
  <div class="index">
    <mt-header fixed title="index"></mt-header>
    <div class="page-content">
      <i-icon name="icon-search"></i-icon>
      <i-icon name="icon-Artboard26" symbol></i-icon>
      <p v-for="i in 20" :key="i" @click="toDetail">{{i}}index</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {}
  },
  methods: {
    toDetail() {
      this.$router.push('/detail')
    }
  }
}
</script>
