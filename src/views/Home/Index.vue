<template>
  <section>
    <Menu />
    <Description />
    <ApplyForm />
  </section>
</template>

<script>

import Menu from '../../layout/Menu'
import Description from '../../layout/Description'
import ApplyForm from '../../layout/ApplyForm'
export default {
  name: 'HomeIndex',
  components: {ApplyForm, Description, Menu},
}
</script>
<style scoped>

</style>
