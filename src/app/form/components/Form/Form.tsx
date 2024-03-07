'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';
import { sendGTMEvent } from '@next/third-parties/google'
import Input from '@/infrastructure/components/Input';
import formSchema, { FormSchema } from '@/app/form/components/Form/schema';
import Checkbox from '@/infrastructure/components/Checkbox';
import { onFormSubmit } from '@/app/form/components/actions';

export default function Form() {
  const methods = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: '',
      checkbox: false,
    },
  })

  const handleOnSubmit = async (data: Omit<FormSchema, 'checkbox'>) => {
    sendGTMEvent({ event: 'form_submitted' })
    await onFormSubmit({ ...data })
  }

  return (
    <FormProvider {...methods}>

      <form className="flex flex-col gap-3" onSubmit={methods.handleSubmit(handleOnSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <Input name="firstName" label="First name" placeholder="First name" dataTestId="firstName" />
          <Input name="lastName" label="Last name" placeholder="Last name" dataTestId="lastName" />
        </div>
        <Input name="email" label="Email" placeholder="you@company.com" dataTestId="email" />
        <Input name="phoneNumber" label="Phone number" placeholder="+1 (555) 000-000" dataTestId="phoneNumber" />
        <Input name="message" label="Message" placeholder="Leave us a message..." textarea dataTestId="message" />
        <Checkbox
          name="checkbox"
          dataTestId="checkbox"
          label={(
            <>
              You agree to our friendly&nbsp;
              <Link href="/#" className="underline">
                privacy policy.
              </Link>
            </>
        )}
        />
        <button
          type="submit"
          aria-label="Name"
          className="h-12 w-full bg-purple-600 text-white mt-4 py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none"
        >
          Send message
        </button>
      </form>
    </FormProvider>
  )
}
