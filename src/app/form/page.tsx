import Image from 'next/image';
import Script from 'next/script';
import Form from '@/app/form/components/Form';

export default function FormPage() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-6 pb-24 md:px-8 gap-4">
        <div className="flex flex-col md:p-8 gap-8">
          <h1 className="text-4xl font-bold w-full">Get in touch</h1>
          <p className="text-gray-600 text-xl w-full">Our friendly team would love to hear from you.</p>
          <Form />
        </div>
        <div className="relative flex justify-center items-center">
          <Image src="/form-before-moved-to-dato.jpg" alt="todo" fill className="object-cover" />
        </div>
      </div>
      <Script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/144178191.js" />
    </>
  )
}
