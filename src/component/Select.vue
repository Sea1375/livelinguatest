<template>
  <div class="form-group">
    <Label
        :label="label"
        :title="title"
        :description="description"
    />
    <select v-model="$store.state[id]" :disabled="disabled">
      <option selected="" disabled="" value="">-</option>
      <option v-if="options[0] !== 2020" v-for="(option, index) in options" :value="index"
              :disabled="option === '----------'">
        {{ option }}
      </option>
      <option v-else v-for="(option, index) in 99" :value="options[1] + (99 - option)">
        {{ options[1] + (99 - option) }}
      </option>
    </select>
  </div>
</template>

<script>
import Input from '@/component/Input'
import Label from '@/component/Label'
export default {
  name: 'Select',
  components: {Label, Input},
  props: ['id', 'label', 'options', 'title', 'description', 'disabled'],
  data() {
    return {
      dialog: false
    }
  }
}
</script>

<style scoped>

</style>
