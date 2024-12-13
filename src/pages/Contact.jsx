import React, {useState} from "react";

const Contact = () => {
  const [form, setForm] = useState({name: '', email: '', message: ''});
  const [isLoading, setIsloading] = useState(false);

  const handleChange = () => {};
  const handleFocus = () => {};
  const handleBlur = () => {};   

  return (
    <section className="relative flex l:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form className="w-full flex flex-col gap-7 mt-14">
          <label className="text-black-500 font-semibold">
            Name
            <input className="input" 
              placeholder="John"
              type="text" 
              name="name" 
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Email
            <input className="input"
              type="email"
              name="email"
              placeholder="john@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Your Message
            <textarea placeholder="Let me know how I can help you!"
              name="message"
              rows={4}
              className="textarea"
              required
              value={form.message}
              onChahge={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button className="btn"
            type="submit"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact;