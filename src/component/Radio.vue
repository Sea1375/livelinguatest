<template>
  <div class="form-group">
    <Label
        :label="label"
        :title="title"
        :description="description"
    />
    <div v-for="(option, index) in options" :key="index">
      <input type="radio" :value="index" :name="id" @change="onRadio">
      <span class="radio-span">&nbsp;{{ option }}</span>
    </div>
  </div>
</template>

<script>
import Label from '@/component/Label'

export default {
  name: 'Radio',
  components: {Label},
  props: ['id', 'label', 'options', 'title', 'description'],
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    onRadio() {
      this.$store.commit(this.id, true)
    }
  }
}
</script>

<style scoped>

.radio-span {
  font-size: 14px;
}

</style>
