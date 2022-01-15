<template>
  <div class="container md apply-panel">
    <h3>APPLY NOW</h3>
    <hr>
    <form action="" id="" type="post">
      <AccountInformation />
      <TeachingExperience :languages="languages"/>
      <PersonalInformation :languages="languages"/>
      <HowToHear />
      <Resume />
    </form>
  </div>
</template>

<script>
import AccountInformation from '@/layout/AccountInformation'
import TeachingExperience from '@/layout/TeachingExperience'
import PersonalInformation from '@/layout/PersonalInformation'
import HowToHear from '@/layout/HowToHear'
import Resume from '@/layout/Resume'

export default {
  name: 'ApplyForm',
  components: {Resume, HowToHear, PersonalInformation, TeachingExperience, AccountInformation},
  data() {
    return {
      languages: [
        'Spanish',
        'English',
        'French',
        'German',
        'Italian',
        'Japanese',
        'Korean',
        '----------',
        'Acholi',
        'Albanian',
        'Amharic',
        'Anufo',
        'Arabic',
        'Armenian',
        'Aymara',
        'Azerbaijani',
        'Bambara',
        'Basaa',
        'Bassar',
        'Belarusian',
        'Bemba',
        'Bengali',
        'Bikol',
        'Bislama',
        'Bulgarian',
        'Cambodian',
        'Cantonese',
        'Cebuano',
        'Chewa',
        'Chinese',
        'Chinyanja',
        'Ciluba',
        'Crioulo',
        'Czech',
        'Dutch',
        'Estonian',
        'Ewe',
        'Fante',
        'Fijian',
        'Filipino',
        'Finnish',
        'FonFula',
        'General',
        'Georgian',
        'Greek',
        'Guarani',
        'Haitian',
        'Hausa',
        'HebrewHindi',
        'Hungarian',
        'Ifé',
        'Igbo',
        'Ikposso',
        'Ilokano',
        'Ilonggo',
        'Indonesian',
        'Ivatan',
        'Jahanka',
        'Jola',
        'Kabiyé',
        'Kanuri',
        'Kaqchikel',
        'Kazakh',
        'Kikamba',
        'Kirundi',
        'Kiswahili',
        'Kituba',
        'Konkomba',
        'Kreol',
        'Krio',
        'Kriolu',
        'Kwanyama',
        'Kyrgyz',
        'Lamba',
        'Lao',
        'Latvian',
        'Lingala',
        'Luganda',
        'Lunyoro',
        'Maasai',
        'Macedonian',
        'Madi',
        'Malagasy',
        'Mandinka',
        'Maninka',
        'Maranao',
        'Marshallese',
        'Mende',
        'Moba',
        'Moldovan',
        'Mongolian',
        'Moore',
        'More',
        'Ndonga',
        'Nepali',
        'Norwegian',
        'Oromo',
        'Persian',
        'Polish',
        'Portuguese',
        'Pulaar',
        'Q\'eqchi\'',
        'Romanian',
        'Russian',
        'Samoan',
        'Sarahulle',
        'Serbian',
        'Serbo-Croatian',
        'Sesotho',
        'Setswana',
        'Shona',
        'Sinhala',
        'Siswati',
        'Soninke',
        'Sranan',
        'Susu',
        'Swahili',
        'Swedish',
        'Tagalog',
        'Tamazight',
        'Tashelhit',
        'Tausug',
        'Telugu',
        'Tem Tembo',
        'Temne',
        'Tetum',
        'Thai',
        'Tok Pisin',
        'Turkish',
        'Turkmen',
        'Twi',
        'Ukrainian',
        'Uzbek',
        'Vietnamese',
        'Wolof',
        'Yoruba',
        'Zarma',
        'Zulu'
      ],
    }
  }
}
</script>

<style scoped>
.apply-panel {
  padding: 20px;
}
h3 {
  color: #08c;
}
</style>
