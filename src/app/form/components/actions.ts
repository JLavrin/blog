'use server'

import {FormSchema} from "@/app/form/components/Form/schema";
import postForm from "@/utils/hubspot/requests/postForm";
import {redirect} from "next/navigation";

export async function onFormSubmit (data: Omit<FormSchema, 'checkbox'>) {
  const isSuccess = await postForm(data)

  if (isSuccess) {
    redirect('/form/thank-you')
    return
  }

  return {
    error: 'There was an error submitting the form. Please try again later.'
  }
}
