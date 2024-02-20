import Image from "next/image";
import Input from "@/infrastructure/components/Input";
import Link from "next/link";

export default function FormPage() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pt-6 pb-24 md:px-8 gap-4">
      <div className="flex flex-col md:p-8 gap-8">
        <h1 className="text-4xl font-bold w-full">Get in touch</h1>
        <p className="text-gray-600 text-xl w-full">Our friendly team would love to hear from you.</p>
        <form className="flex flex-col gap-3" action="submit">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <Input name="first_name" label="First name" placeholder="First name"/>
            <Input name="last_name" label="Last name" placeholder="Last name"/>
          </div>
          <Input name="email" label="Email" placeholder="you@company.com"/>
          <Input name="phone_number" label="Phone number" placeholder="+1 (555) 000-000"/>
          <Input name="message" label="Message" placeholder="Leave us a message..." textarea />
          <div className="flex items-center">
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              className="h-4 w-4 text-blue-500 focus:outline-none appearance-none border border-gray-400 rounded checked:appearance-auto"
            />
            <label htmlFor="checkbox" className="ml-2 text-gray-700 text-base">
              You agree to our friendly&nbsp;
              <Link href="#" className="underline">
                privacy policy.
              </Link>
            </label>
          </div>
          <button className="h-12 w-full bg-purple-600 text-white mt-4 py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none">
            Send message
          </button>
        </form>
      </div>
      <div className="relative flex justify-center items-center">
        <Image src="/form-before-moved-to-dato.jpg" alt="todo" fill className="object-cover"/>
      </div>
    </div>
  )
}
