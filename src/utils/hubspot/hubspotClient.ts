import axios from 'axios';

const URL = process.env.HUBSPOT_API_URL || ''
const TOKEN = process.env.HUBSPOT_API_TOKEN || ''

const hubspotClient = axios.create({
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
  baseURL: URL,
})

export default hubspotClient
