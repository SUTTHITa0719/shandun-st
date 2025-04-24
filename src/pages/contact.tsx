import * as React from "react";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";


export default function ContactPage() {
  return (
    <div className=" w-full bg-white py-16 px-6 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-10 items-center">

        <ContactForm />
        <ContactInfo />
        
      </div>
    </div>
  );
}
