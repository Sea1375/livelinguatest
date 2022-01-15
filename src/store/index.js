import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        title: '',
        firstname: '',
        lastname: '',
        email: '',
        confirmEmail: '',
        skype: '',
        language: '',
        teachingStyle: '',
        teachingDate: '',
        age: '',
        degree: '',
        collegeDegree: '',
        course: '',
        certificate: '',
        experience: '',
        hour: '',
        personalLanguages: [
            {
                language: '',
                fluency: ''
            }
        ],
        countryOfOrigin: '',
        stateOfOrigin: '',
        cityOfOrigin: '',
        countryOfResidence: '',
        stateOfResidence: '',
        cityOfResidence: '',
        hear: '',
        academic: '',
        resume: '',
        photo: ''
    },
    mutations: {
        addLanguage (state, personalLanguage) {
            state.personalLanguages.push(personalLanguage)
        },
        removeLanguage(state, index) {
            for (let i = index; i < state.personalLanguages.length - 1; i++) {
                state.personalLanguages[i] = state.personalLanguages[i+1]
            }
            state.personalLanguages.pop()
        }
    }

})
export default store
