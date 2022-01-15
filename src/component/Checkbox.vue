<template>
  <div class="form-group">
    <Label
        :label="label"
        :title="title"
        :description="description"
    />
    <div class="columns">
      <div v-for="(option, index) in options" :key="index" class="column col-6 col-12-md checkbox-div">
        <input type="checkbox" :value="index" @change="onCheck" class="checkbox">
        <span class="checkbox-span">&nbsp;{{ option }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Label from '@/component/Label'
export default {
  name: 'Checkbox',
  components: {Label},
  props: ['id', 'label', 'options', 'title', 'description'],
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    onCheck() {
      let checks = document.getElementsByClassName('checkbox')

      this.$store.commit(this.id, false)
      for (const check of checks) {
        if (check.checked) {
          this.$store.commit(this.id, true)
          break
        }
      }
    }
  }
}
</script>

<style scoped>

.checkbox-div {
  padding: 5px 15px 0 !important;
}

.checkbox-span {
  font-size: 14px;
}

label {
  margin-bottom: 15px;
}
</style>
