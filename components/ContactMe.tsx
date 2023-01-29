'use client';

import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: String,
  email: String,
  subject: String,
  message: String,
};

const ContactMe = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.open(`mailto:x@y.com?subject=${formData.subject}&body=Hi, ${formData.name} here. ${formData.message}`, '_blank')
  };

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          I have got just what you need. {" "}
          <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk</span>
        </h4>
        <div className='space-y-10'>
          <div className='flex iterm-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>+11234567890</p>
          </div>
          <div className='flex iterm-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>x@y.com</p>
          </div>
          <div className='flex iterm-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>Address</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
            <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
          </div>
          <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
          <textarea {...register('message')} placeholder='Message' className='contactInput'></textarea>
          <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rouned-md text-black font-bold text-lg'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe