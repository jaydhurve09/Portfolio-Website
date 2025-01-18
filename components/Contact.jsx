import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Contact = () => {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "72059288-6186-4e39-9157-dc78b24133fb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    } };

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with me</h4>
      <h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I&apos;d love to hear from you! If you have any questions, comments or feedback, please use the form below</p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
        <input type="text" placeholder='Enter your name' required className='flex flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='name'/>
        <input type="email" placeholder='Enter your email' required className='flex flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='email'/>
        </div>
        <textarea rows='6' placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='message'></textarea>
        <button type='submit' className='w-max flex items-center justify-between gap-2 border-[0.5px] border-gray-700 rounded-full py-3 px-8 mx-auto my-10 text-white bg-black/80 hover:bg-black duration-500'>
            Submit Now<Image src={assets.right_arrow_white} alt='' className='w-4'/>
        </button>

        <p className='mt-4'>{result}</p>
      </form>
    </div>
  )
}

export default Contact
