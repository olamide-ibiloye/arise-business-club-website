import React from "react";

const NewsletterForm = () => {
  return (
    <fieldset className="form-control">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label>
      <div className="flex flex-col sm:flex-row">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered mb-2 sm:mr-2"
        />
        <button className="btn bg-accent outline-none text-white hover:bg-white hover:text-black duration-200 transition-colors">
          Subscribe
        </button>
      </div>
    </fieldset>
  );
};

export default NewsletterForm;
