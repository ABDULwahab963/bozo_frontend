import React from "react";

const Contact = () => {
  return (
    <section className="w-full h-screen bg-light_bg">
      <form action="" className="mt-[124px]">
        <label htmlFor="">
          <span>Name</span>
          <input type="text" placeholder="Enter Your Name" />
        </label>

        <label htmlFor="">
          <span>Email</span>
          <input type="text" placeholder="Enter Your Name" />
        </label>

        <label htmlFor="">
          <span>Message</span>
          <textarea className="h-[120px] resize-none" type="text" placeholder="Enter Your Name"></textarea>
        </label>

        <button className="primary-btn !w-full !p-[12px]">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
