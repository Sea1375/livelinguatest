<template>
  <fieldset>
    <legend>ACCOUNT INFORMATION</legend>
    <div class="columns">
      <div class="column col-2 col-4-md col-12-sm">
        <Select id="title"
                label="Title"
                :options="titleOptions"
                title="Your Title"
                description="Your title."
        />
      </div>
      <div class="column col-5 col-4-md col-12-sm">
        <Input
            id="firstname"
            label="First name"
            title="Your First Name"
            description="Your first name. What is the first name you would like us to use when addressing you. If you're from a Spanish speaking country - with multiple first names - or an Asian country where you have a western name, please feel free to use them here."
        />
      </div>

      <div class="column col-5 col-4-md col-12-sm">
        <Input
            id="lastname"
            label="Last name"
            title="Your Last Name"
            description="Your last name or family name. In the event that you have more than one last name, please feel free include them all."
        />
      </div>
      <div class="column col-6 col-12-md">
        <Input
            id="email"
            label="Email Address"
            title="Your Email"
            description="The email address would you like us to use to contact you. Please make sure you put this in correctly so we can contact you."
        />
      </div>
      <div class="column col-6 col-12-md">
        <Input
            id="confirmEmail"
            label="Confirm Email"
        />
      </div>
      <div class="column col-6 col-12">
        <Input
            id="skype"
            label="Skype Username"
            title="Your Skype Username"
            description="To teach at Live Lingua you need to have a free Skype account.<br><br>Our students use Skype to have face-to-face interactions with language instructors and to better learn the nuances of the language they're learning. If you don't already have one you can create one for free by going to Skype.com and following the sign up instructions on the page. Of course if you need any assistance, please don't hesitate to contact us."
        />
      </div>
    </div>
  </fieldset>
</template>

<script>
import Select from '@/component/Select'
import Input from '@/component/Input'

export default {
  name: 'AccountInformation',
  components: {Input, Select},
  data() {
    return {
      titleOptions: [
        'Mr.', 'Ms.', 'Mrs.', 'Dr.', 'Prof.', 'Mx.',
      ]
    }
  }
}
</script>

<style scoped>

</style>
