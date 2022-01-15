<template>
  <fieldset>
    <div class="columns">
      <div class="column col-12">
        <Upload
            id="resume"
            label="Resume: please make sure your resume is up to date and includes all the relevant information about your studies and experience teaching your native language a second language."
            condition="Limit resume size to 5mb."
            accept=".doc, docx, .pdf"
        />
      </div>
      <div class="column col-12">
        <Upload
            id="photo"
            label="Photo Uploader"
            condition="Limit photo size to 2mb."
            accept=".jpg, .jpeg, .png"
            title="Photo Uploader"
            description="Please upload a current photo of yourself. Feel free to crop the image as you see fit.<br><br>If selected as a Live Lingua instructor we'll need a photo as part of your instructor profile."
        />
      </div>
      <div class="column col-12">
        <div id="alert" class="alert display-none">
          {{ alertText }}
        </div>
      </div>
      <div class="column col-12">
        <div class="submit-button" @click="onSubmit">
          Submit and Begin Quiz
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script>
import axios from 'axios'
import Upload from '@/component/Upload'
import Description from '@/layout/Description'

export default {
  name: 'Resume',
  components: {Description, Upload},
  data() {
    return {
      url: 'https://livelingua.com/application.php',
      texts: {
        title: 'your title',
        firstname: 'your firstname',
        lastname: 'your last name',
        email: 'your email address',
        confirmEmail: 'correct confirm email',
        skype: 'your skype username',
        language: 'language taught',
        teachingStyle: 'teaching style',
        teachingDate: 'year you started to teach your native language as a second language',
        age: 'ages taught',
        degree: 'if your degree is in education or teaching your language',
        collegeDegree: 'what specifically is your college degree',
        course: 'if you had completed a certification course',
        certificate: 'your education & sertificates',
        experience: 'your teaching experience',
        hour: 'how much hours you can teach every week',
        personalLanguages: 'your languages',
        countryOfOrigin: 'your country of origin',
        stateOfOrigin: 'your state of origin',
        cityOfOrigin: 'your city of origin',
        countryOfResidence: 'your country of residence',
        stateOfResidence: 'your state of residence',
        cityOfResidence: 'your city of residence',
        hear: 'how\'s you hear about us',
        academic: 'other important academic information',
        resume: 'your resume',
        photo: 'your photo'
      },
      alertText: '',
      regx: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    }
  },
  methods: {
    onSubmit() {
      let keys = Object.keys(this.$store.state)

      for (const key of keys) {
        if (this.$store.state[key] === '' || this.$store.state[key] === false) {
          this.alertText = 'Please enter ' + this.texts[key]

          this.onAlert()
          return
        }

        if (!this.regx.test(this.$store.state['email'])) {
          this.alertText = 'Please enter a valid email'

          this.onAlert()
          return
        }
      }

      if (this.$store.state['email'] !== this.$store.state['confirmEmail']) {
        this.alertText = 'The email address not matched'

        this.onAlert()
        return
      }

      let personals = this.$store.state['personalLanguages']
      for (const personal of personals) {
        if (!personal.language) {
          this.alertText = 'Please enter languages spoken'

          this.onAlert()
          break
        }
      }

      this.toServer()
    },
    onAlert() {
      document.getElementById('alert').classList.remove('display-none')

      setTimeout(() => {
        document.getElementById('alert').classList.add('display-none')
      }, 3000)
    },
    toServer() {
      axios.post(this.url, this.$store.state)
      .then(response => {
        location.href = 'https://livelingua.com'
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.submit-button {
  color: #fff;
  text-shadow: 0 -1px 0 rgb(0 0 0 / 25%);
  background-color: #08c;
  border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
  width: 250px;
  text-align: center;
  margin: auto;
  cursor: pointer;
}

.alert {
  color: #DB4437;
}
</style>
