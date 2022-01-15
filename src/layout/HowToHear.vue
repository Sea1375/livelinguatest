<template>
  <fieldset>
    <div class="columns">
      <div class="column col-6 col-12-md">
        <Select
            id="hear"
            label="How's you hear about us?"
            :options="hears"
        />
      </div>
      <div class="column col-12">
        <Textarea
            id="academic"
            label="Other Important Academic Information: Name and give a short description of other courses related to teaching the language you have taught: I am certified as a AP Spanish and Culture for 3 years, Spanish as a second language teacher for kids from 5 to 12 years old for 3 years, Spanish for Business I have a BA on Business, etc. "
        />
      </div>
    </div>
  </fieldset>
</template>

<script>
import Select from '@/component/Select'
import Textarea from '@/component/Textarea'
export default {
  name: 'HowToHear',
  components: {Textarea, Select},
  data() {
    return {
      hears: [
        'Google Search',
        'Referred By Friend',
        'Facebook',
        'Instagram',
        'LinkedIn',
        'Indeed.com',
        'Craigslist.com',
        'OETJobs.com',
        'Locanto.com',
        'Jora.com',
        'Jobspider.com',
        'postjobfree.com',
        'Internations.com',
        'Don\'t remember',
        'Other',
      ]
    }
  }
}
</script>

<style scoped>

</style>
