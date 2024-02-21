'use server'

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { FormSchema } from '@/app/form/components/Form/schema';
import postForm from '@/utils/hubspot/requests/postForm';

export async function onFormSubmit(data: Omit<FormSchema, 'checkbox'>) {
  const cookieStore = cookies()
  const hubspotTrackingCookie = cookieStore.get('hutk')?.value
  const isSuccess = await postForm(data, hubspotTrackingCookie)

  if (isSuccess) {
    redirect('/form/thank-you')
  }

  return {
    error: 'There was an error submitting the form. Please try again later.',
  }
}
