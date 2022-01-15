<template>
  <div class="columns">
    <div class="column col-6 col-12-md padding">
      <LanguageSelect
          :id="id"
          :options="languages"
      />
    </div>
    <div class="column col-4 col-12-md padding">
      <LanguageFluency
          :id="id"
          :options="fluencys"
      />
    </div>
    <div v-if="id !== 0" class="column col-1 col-12-md padding" style="margin: auto;">
      <div class="btn btn-danger" @click="removeLanguage">
        X
      </div>
    </div>
  </div>
</template>

<script>
import LanguageSelect from '@/component/LanguageSelect'
import LanguageFluency from '@/component/LanguageFluency'

export default {
  name: 'Language',
  components: {LanguageFluency, LanguageSelect},
  props: ['id', 'languages'],
  data() {
    return {
      fluencys: [
        'Native', 'Advanced', 'Intermediate', 'Beginner'
      ]
    }
  },
  methods: {
    removeLanguage() {
      this.$store.commit('removeLanguage', this.id)
    }
  }
}
</script>

<style scoped>
.padding {
  padding-top: 3px !important;
  padding-bottom: 3px !important;
}
.btn-danger {
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
}
</style>
