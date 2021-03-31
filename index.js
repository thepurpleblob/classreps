
require('dotenv').config()
const axios = require('axios')
const { URLSearchParams } = require('url')

const token = process.env.REST_TOKEN
const url = process.env.REST_URL
const courseid = process.env.COURSE_ID
const guid = process.env.GUID

const params = new URLSearchParams()
params.append('courseid', courseid)
params.append('guid', guid)
let moodlep = axios.post(url + '?wstoken=' + token + '&wsfunction=local_guws_guid_completion&moodlewsrestformat=json', params)
moodlep.then(result => {
	console.log('IT WORKED')
        console.log(result.data)
    })
    .catch(error => {
	console.log('IT WENT WRONG')
        console.log(error.message)
    })

