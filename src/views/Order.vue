<template>
  <div class="order">
    <mt-header fixed title="order"></mt-header>
    <div class="page-content">
      <p v-for="i in 20" :key="i">{{i}}order</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'order',
  data() {
    return {
    }
  }
}
</script>
