import hubspotClient from "@/utils/hubspot";

const FORM_ID = process.env.HUBSPORT_LEAD_FORM_ID
const PORTAL_ID = process.env.HUBSPOT_PORTAL_ID

type Payload = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export default async function postForm(data: Payload) {
  try {
    console.log('payload', data)
   const res = await hubspotClient.post(`/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`, {
      fields: [
        {
          name: 'firstname',
          value: data.firstName,
        },
        {
          name: 'lastname',
          value: data.lastName,
        },
        {
          name: 'email',
          value: data.email,
        },
        {
          name: 'phone',
          value: data.phoneNumber,
        },
      ],
    });
    console.log(res.status)
    return true;
  } catch (error) {
    console.log('error', error)
    return false
  }
}
