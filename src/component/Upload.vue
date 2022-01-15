<template>
  <div class="form-group">
    <Label
        :label="label"
        :title="title"
        :description="description"
    />
    <div>{{ condition }}</div>
    <div id="dropArea" class="drop-area" @click="onUpload">
      Click or Drop files here to upload
    </div>
    <input type="file" id="fileUpload" class="file-upload"
           :accept="accept"
           @change="onChange"/>
  </div>
</template>

<script>
import Label from '@/component/Label'

export default {
  name: 'Upload',
  components: {Label},
  props: ['id', 'label', 'condition', 'accept', 'title', 'description', 'placeholder'],
  methods: {
    onUpload() {
      document.getElementById('fileUpload').click()
    },
    onChange() {
      let name = document.getElementById('fileUpload').files[0].name

      document.getElementById('dropArea').innerHTML = name
      this.$store.commit('resume', name)
    }
  }
}
</script>

<style scoped>
.drop-area {
  width: 100%;
  border: 1px solid;
  border-radius: 5px;
  height: 200px;
  text-align: center;
  padding-top: 55px;
  margin: 15px 0;
  cursor: pointer;
}
.file-upload {
  display: none;
}
</style>
