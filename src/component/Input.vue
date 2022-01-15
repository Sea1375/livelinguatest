<template>
  <div class="form-group">
    <Label
        :label="label"
        :title="title"
        :description="description"
    />
    <input type="text" v-model="$store.state[id]" :placeholder="placeholder">
  </div>
</template>

<script>
import Label from '@/component/Label'
export default {
  name: 'Input',
  components: {Label},
  props: ['id', 'label', 'title', 'description', 'placeholder'],
  data() {
    return {
      dialog: false
    }
  }
}
</script>

<style scoped>

</style>
