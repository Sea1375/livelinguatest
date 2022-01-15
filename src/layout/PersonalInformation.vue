<template>
  <fieldset>
    <legend>PERSONAL INFORMATION</legend>
    <div class="columns">
      <div class="column col-6 col-12-md padding">
        <Label
            label="Languages Spoken"
            title="Languages Known"
            description="Please list all languages you speak, beginning with the your native tongue.<br><br>Click the + Add Another button to include up to 10 total languages."
        />
      </div>
      <div class="column col-4 col-12-md padding">
        <Label
            label="Fluency"
            title="Fluency"
            description="For each known language, indicate your level of fluency."
        />
      </div>
      <div v-for="(personalLanguage, index) in $store.state.personalLanguages" :key="index"
           class="column col-12">
        <Language
            :id="index"
            :languages="languages"
        />
      </div>
      <div class="column col-12">
        <div class="btn btn-info" @click="addLanguage">
          <b><strong>+</strong></b> Add Another
        </div>
      </div>
      <div class="column col-4 col-12-md">
        <Select
            id="countryOfOrigin"
            label="Country Of Origin"
            :options="countries"
            title="Country of Origin"
            description="The country where you were born."
        />
      </div>
      <div class="column col-4 col-12-md">
        <Select
            id="stateOfOrigin"
            label="State/Province of Origin"
            :options="provinces[$store.state.countryOfOrigin % 9]"
            title="State of Origin"
            description="The state where you were born."
            :disabled="$store.state.countryOfOrigin === ''"
        />
      </div>
      <div class="column col-4 col-12-md">
        <Input
            id="cityOfOrigin"
            label="City of Origin"
            title="City of Origin"
            description="The city where you were born."
        />
      </div>
      <div class="column col-4 col-12-md">
        <Select
            id="countryOfResidence"
            label="Country Of Residence"
            :options="countries"
            title="Country of Residence"
            description="The country where you currently live."
        />
      </div>
      <div class="column col-4 col-12-md">
        <Select
            id="stateOfResidence"
            label="State/Prov of Origin"
            :options="provinces[$store.state.countryOfResidence % 9]"
            title="State of Residence"
            description="The state where you currently live."
            :disabled="$store.state.countryOfResidence === ''"
        />
      </div>
      <div class="column col-4 col-12-md">
        <Input
            id="cityOfResidence"
            label="City of Residence"
            title="City of Residence"
            description="The city where you currently live"
        />
      </div>
    </div>
  </fieldset>
</template>

<script>
import Language from '@/component/Language'
import Label from '@/component/Label'
import Select from '@/component/Select'
import Input from '@/component/Input'

export default {
  name: 'PersonalInformation',
  components: {Input, Select, Label, Language},
  props: ['languages'],
  data() {
    return {
      countries: [
        'Albania',
        'Algeria',
        'American Samoa',
        'Angola',
        'Anguilla',
        'Antarctica',
        'Antigua and Barbuda',
        'Argentina',
        'Armenia',
        'Aruba',
        'Ashmore and Cartier',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bermuda',
        'Bhutan',
        'Bolivia',
        'Bosnia and Herzegovina',
        'Botswana',
        'Brazil',
        'British Virgin Islands',
        'Brunei',
        'Bulgaria',
        'Burkina Faso',
        'Burma',
        'Burundi',
        'Cambodia',
        'Cameroon',
        'Canada',
        'Cape Verde',
        'Cayman Islands',
        'Central African Republic',
        'Chad',
        'Chile',
        'China',
        'Christmas Island',
        'Clipperton Island',
        'Cocos (Keeling) Islands',
        'Colombia',
        'Comoros',
        'Congo, Democratic Republic of the',
        'Congo, Republic of the',
        'Cook Islands',
        'Costa Rica',
        'Croatia',
        'Cuba',
        'Cyprus',
        'Czech Republic',
        'Denmark',
        'Djibouti',
        'Dominica',
        'Dominican Republic',
        'Ecuador',
        'Egypt',
        'El Salvador',
        'Equatorial Guinea',
        'Eritrea',
        'Estonia',
        'Ethiopia',
        'Europa Island',
        'Falkland Islands (Islas Malvinas)',
        'Faroe Islands',
        'Fiji',
        'Finland',
        'France',
        'French Guiana',
        'French Polynesia',
        'French Southern and Antarctic Lands',
        'Gabon',
        'Gambia, The',
        'Gaza Strip',
        'Georgia',
        'Germany',
        'Ghana',
        'Gibraltar',
        'Glorioso Islands',
        'Greece',
        'Greenland',
        'Grenada',
        'Guadeloupe',
        'Guam',
        'Guatemala',
        'Guernsey',
        'Guinea',
        'Guinea-Bissau',
        'Guyana',
        'Haiti',
        'Heard Island and McDonald Islands',
        'Holy See (Vatican City)',
        'Honduras',
        'Hong Kong',
        'Howland Island',
        'Hungary',
        'Iceland',
        'India',
        'Indonesia',
        'Iran',
        'Iraq',
        'Ireland',
        'Ireland, Northern',
        'Israel',
        'Italy',
        'Jamaica',
        'Jan Mayen',
        'Japan',
        'Jarvis Island',
        'Jersey',
        'Johnston Atoll',
        'Jordan',
        'Juan de Nova Island',
        'Kazakhstan',
        'Kenya',
        'Kiribati',
        'Korea, North',
        'Korea, South',
        'Kuwait',
        'Kyrgyzstan',
        'Laos',
        'Latvia',
        'Lebanon',
        'Lesotho',
        'Liberia',
        'Libya',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Macau',
        'Macedonia, Former Yugoslav Republic of',
        'Madagascar',
        'Malawi',
        'Malaysia',
        'Maldives',
        'Mali',
        'Malta',
        'Man, Isle of',
        'Marshall Islands',
        'Martinique',
        'Mauritania',
        'Mauritius',
        'Mayotte',
        'Mexico',
        'Micronesia',
        'Midway Islands',
        'Moldova',
        'Monaco',
        'Mongolia',
        'Montserrat',
        'Morocco',
        'Mozambique',
        'Namibia',
        'Nauru',
        'Nepal',
        'Netherlands',
        'Netherlands Antilles',
        'New Caledonia',
        'New Zealand',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'Niue',
        'Norfolk Island',
        'Northern Mariana Islands',
        'Norway',
        'Oman',
        'Pakistan',
        'Palau',
        'Panama',
        'Papua New Guinea',
        'Paraguay',
        'Peru',
        'Philippines',
        'Pitcaim Islands',
        'Poland',
        'Portugal',
        'Puerto Rico',
        'Qatar',
        'Reunion',
        'Romania',
        'Russia',
        'Rwanda',
        'Saint Helena',
        'Saint Kitts and Nevis',
        'Saint Lucia',
        'Saint Pierre and Miquelon',
        'Saint Vincent and the Grenadines',
        'Samoa',
        'San Marino',
        'Sao Tome and Principe',
        'Saudi Arabia',
        'Scotland',
        'Senegal',
        'Seychelles',
        'Sierra Leone',
        'Singapore',
        'Slovakia',
        'Slovenia',
        'Solomon Islands',
        'Somalia',
        'South Africa',
        'South Georgia and South Sandwich Islands',
        'Spain',
        'Spratly Islands',
        'Sri Lanka',
        'Sudan',
        'Suriname',
        'Svalbard',
        'Swaziland',
        'Sweden',
        'Switzerland',
        'Syria',
        'Taiwan',
        'Tajikistan',
        'Tanzania',
        'Thailand',
        'Tobago',
        'Togo',
        'Tokelau',
        'Tonga',
        'Trinidad',
        'Tunisia',
        'Turkey',
        'Turkmenistan',
        'Tuvalu',
        'Uganda',
        'Ukraine',
        'United Arab Emirates',
        'United Kingdom',
        'Uruguay',
        'USA',
        'Uzbekistan',
        'Vanuatu',
        'Venezuela',
        'Vietnam',
        'Virgin Islands',
        'Wales',
        'Wallis and Futuna',
        'West Bank',
        'Western Sahara',
        'Yemen',
        'Yugoslavia',
        'Zambia',
        'Zimbabwe',
        'Afghanistan',
        'Cote d\'Ivoire',
        'Serbia',
        'Montenegro'
      ],
      provinces: [
        ['Berat',
          'Bulqize',
          'Delvine',
          'Devoll',
          'Diber',
          'Durres',
          'Elbasan',
          'Fier',
          'Gjirokaster',
          'Gramsh',
          'Has',
          'Kavaje',
          'Kolonje',
          'Korce',
          'Kruje',
          'Kucove',
          'Kukes',
          'Kurbin',
          'Lezhe',
          'Librazhd',
          'Lushnje',
          'Malesi e Madhe',
          'Mallakaster',
          'Mat',
          'Mirdite',
          'Peqin',
          'Permet',
          'Pogradec',
          'Puke',
          'Sarande',
          'Shkoder',
          'Skrapar',
          'Tepelene',
          'Tirane',
          'Tropoje',
          'Vlore'],
        ['Adrar',
          'Ain Defla',
          'Ain Temouchent',
          'Alger',
          'Annaba',
          'Batna',
          'Bechar',
          'Bejaia',
          'Biskra',
          'Blida',
          'Bordj Bou Arreridj',
          'Bouira',
          'Boumerdes',
          'Chlef',
          'Constantine',
          'Djelfa',
          'El Bayadh',
          'El Oued',
          'El Tarf',
          'Ghardaia',
          'Guelma',
          'Illizi',
          'Jijel',
          'Khenchela',
          'Laghouat',
          'Mascara',
          'Medea',
          'Mila',
          'Mostaganem',
          'MSila',
          'Naama',
          'Oran',
          'Ouargla',
          'Oum el Bouaghi',
          'Relizane',
          'Saida',
          'Setif',
          'Sidi Bel Abbes',
          'Skikda',
          'Souk Ahras',
          'Tamanghasset',
          'Tebessa',
          'Tiaret',
          'Tindouf',
          'Tipaza',
          'Tissemsilt',
          'Tizi Ouzou',
          'Tlemcen'],
        ['Eastern',
          'Manua',
          'Rose',
          'Swains',
          'Western'],
        ['Andorra la Vella',
          'Bengo',
          'Benguela',
          'Bie',
          'Cabinda',
          'Canillo',
          'Cuando Cubango',
          'Cuanza Norte',
          'Cuanza Sul',
          'Cunene',
          'Encamp',
          'Escaldes Engordany',
          'Huambo',
          'Huila',
          'La Massana',
          'Luanda',
          'Lunda Norte',
          'Lunda Sul',
          'Malanje',
          'Moxico',
          'Namibe',
          'Ordino',
          'Sant Julia de Loria',
          'Uige',
          'Zaire'],
        ['Anguilla'],
        ['Antartica'],
        ['Barbuda',
          'Redonda',
          'Saint George',
          'Saint John',
          'Saint Mary',
          'Saint Paul',
          'Saint Peter',
          'Saint Philip'],
        ['Antartica e Islas del Atlantico Sur',
          'Buenos Aires',
          'Buenos Aires Capital Federal',
          'Catamarca',
          'Chaco',
          'Chubut',
          'Cordoba',
          'Corrientes',
          'Entre Rios',
          'Formosa',
          'Jujuy',
          'La Pampa',
          'La Rioja',
          'Mendoza',
          'Misiones',
          'Neuquen',
          'Rio Negro',
          'Salta',
          'San Juan',
          'San Luis',
          'Santa Cruz',
          'Santa Fe',
          'Santiago del Estero',
          'Tierra del Fuego',
          'Tucuman'],
        ['Aragatsotn',
          'Ararat',
          'Armavir',
          'Gegharkunik',
          'Kotayk',
          'Lorri',
          'Shirak',
          'Syunik',
          'Tavush',
          'Vayots Dzor',
          'Yerevan'],
      ]
    }
  },
  methods: {
    addLanguage() {
      let payload = {
        language: '',
        fluency: ''
      }
      this.$store.commit('addLanguage', payload)
    }
  }
}
</script>

<style>
.padding {
  padding-top: 3px !important;
  padding-bottom: 3px !important;
}

.btn-info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}

.btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
