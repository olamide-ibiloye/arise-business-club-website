import React from "react";

interface FormProps {
  title: string;
}

const Form = ({ title }: FormProps) => {
  return (
    <fieldset className="form-control">
      <label className="label">
        <span className="label-text">{title}</span>
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

export default Form;
