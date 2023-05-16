import React from "react";
import { useForm } from "react-hook-form";

export default function Email() {
    const EMAIL_REGEX_VALIDATION = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;

    const { 
      register, 
      handleSubmit, 
      formState: { errors } 
    } = useForm();

    const onSubmit = (data) =>{
      console.log(data)
    }
    return (
        <section className="email-section">
            <h2 className="email--header">Get early access today</h2>
            <p className="email--text">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
            questions, our support team would be happy to help you.</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="email--input" type="email" placeholder="email@example.com" 
                {...register("email", {
                    required: true,
                    pattern: EMAIL_REGEX_VALIDATION,
                  })}
                  />
                  {
                    errors.email && (
                    <p className='error'>Please provide a valid email address</p>
                    )}
          

                <button className='email--button'>Get Started For Free</button>
            </form>
        </section>
    )
}