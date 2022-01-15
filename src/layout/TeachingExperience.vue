<template>
  <fieldset>
    <legend>TEACHING EXPERIENCE</legend>
    <div class="columns">
      <div class="column col-6 col-12-md">
        <Select
            id="language"
            label="Language Taught"
            :options="languages"
            title="Language"
            description="The language you'd like to teach on Live Lingua.<br><br>Your language of expertise should be both your native language and one you have experience teaching."
        />
      </div>
      <div class="column col-12">
        <Select
            id="teachingStyle"
            label="Teaching Style"
            :options="teachingStyles"
            title="Teaching Style"
            description="Your preferred teaching method."
        />
      </div>
      <div class="column col-12">
        <Select
            id="teachingDate"
            label="Year you started to teach your native language as a second Language"
            :options="teachingDate"
            title="Year You Began Teaching"
            description="The year you began teaching this language.<br><br>Note: Live Lingua requires at least two years of language teaching experience to foreigners."
        />
      </div>
      <div class="column col-12">
        <Checkbox
            id="age"
            label="Ages Taught"
            :options="ages"
            title="Ages Taught"
            description="The age groups you have experience teaching. Include all that you're willing to educate here on Live Lingua."
        />
      </div>
      <div class="column col-12">
        <Radio
            id="degree"
            label="Is your degree in education or teaching your language as a second language?"
            :options="degrees"
        />
      </div>
      <div class="column col-6 col-md-12">
        <Input
            id="collegeDegree"
            label="What specifically is your college degree?"
            placeholder="Ex: BA in English"
        />
      </div>
      <div class="column col-12">
        <Radio
            id="course"
            label="Have you completed a certification course of at least 120 hours to teach your language? (Spanish: DELE/ ELE, International House, English: TOEFL, French: DELF, etc.)"
            :options="courses"
        />
      </div>
      <div class="column col-12">
        <Textarea
            id="certificate"
            label="Education & Certificates: Write all the relevant Academic Information related to your education for teaching your native language as a second Language "
            title="Education & Teaching Language Certificates"
            description="Your personal education history and accolades.<br><br>Note: You can opt to attach a resume below."
        />
      </div>
      <div class="column col-12">
        <Textarea
          id="experience"
          label="Teaching Experience: Write all the relevant information related to your experience teaching your native language as a second language: student's ages, levels, specific programs, institutions you have worked for, etc."
          title="Teaching Experience"
          description="Additional information pertaining to your language teaching experience. Nationalities and ages taught, class sizes, etc.<br><br>Note: You can opt to attach a resume below."
          placeholder="Nationalities, ages, class size, etc."
        />
      </div>
      <div class="column col-6 col-12-md">
        <Select
            id="hour"
            label="How many hours can you teach each week?"
            :options="hours"
            title="Availability"
            description="Your weekly availability to teach Live Lingua students."
        />
      </div>
    </div>
  </fieldset>
</template>

<script>
import Select from '@/component/Select'
import Checkbox from '@/component/Checkbox'
import Radio from '@/component/Radio'
import Input from '@/component/Input'
import Textarea from '@/component/Textarea'

export default {
  name: 'TeachingExperience',
  components: {Textarea, Input, Radio, Checkbox, Select},
  props: ['languages'],
  data() {
    return {
      teachingStyles: [
          'Grammatical Focus', 'Communicative Focus', 'Interactive', 'Hybrid'
      ],
      teachingDate: [2020, 1922],
      ages: [
          'Children (4-10)',
          'Adults (23-59)',
          'Adolescents (11-17)',
          'Seniors (60+)',
          'College/University(18-22)'
      ],
      degrees: ['Yes', 'No'],
      courses: ['Yes', 'No'],
      hours: [
        '0-5 hours',
        '5-10 hours',
        '10-20 hours',
        '20-30 hours',
        '30+ hours',
      ],
    }
  }
}
</script>

<style scoped>

</style>
