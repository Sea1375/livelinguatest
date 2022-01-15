<template>
  <div class="form-group">
    <select v-model="$store.state.personalLanguages[id].language">
      <option selected="" disabled="" value="">-</option>
      <option v-for="(option, index) in options" :key="index" :value="index"
              :disabled="option === '----------'">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import Input from '@/component/Input'
import Label from '@/component/Label'
export default {
  name: 'LanguageSelect',
  components: {Input},
  props: ['id', 'label', 'options', 'title', 'description'],
  data() {
    return {
      dialog: false
    }
  }
}
</script>

<style scoped>
</style>
