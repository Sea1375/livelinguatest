<template>
  <select v-model="$store.state.personalLanguages[id].fluency">
    <option selected="" disabled="" value="">-</option>
    <option v-for="(option, index) in options" :key="index" :value="index">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'LanguageFluency',
  props: ['id', 'options']
}
</script>

<style scoped>

</style>
