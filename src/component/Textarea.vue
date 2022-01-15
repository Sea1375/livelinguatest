<template>
  <v-app class="form-group">
    <label>
      {{ label }} *
      <v-dialog
          v-if="title"
          v-model="dialog"
          width="500"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              v-bind="attrs"
              v-on="on"
          >
            ?
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="text-h4 grey lighten-2">
            {{ title }}
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text class="text-h5" v-html="description">
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary text-h5"
                text
                @click="dialog = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </label>
    <textarea v-model="$store.state[id]" :placeholder="placeholder" />
  </v-app>
</template>

<script>
export default {
  name: 'Textarea',
  props: ['id', 'label', 'title', 'description', 'placeholder'],
  data() {
    return {
      dialog: false
    }
  }
}
</script>

<style scoped>
::v-deep .v-application--wrap {
  min-height: fit-content;
}

::v-deep .v-btn:not(.v-btn--round).v-size--default {
  height: 18px;
  min-width: 0;
  padding: 0 2px;
  margin: 0 0 5px 0;
}

hr {
  margin: 0 0 10px 0;
}

input[type=button] {
  border: 1px solid #3d3d3d;
  border-radius: 3px;
  font-size: 14px;
  padding: 1px 2px 0 1px;
}
</style>
