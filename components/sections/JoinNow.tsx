import React from "react";

const JoinNow = () => {
  return (
    <section className="padding-y box">
      <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-6 text-center">
        Join Now
      </h2>

      <div className="text-xl leading-relaxed text-center">
        <p className="p-4">Ready to take the next step?</p>

        <p className="info-text">
          Become a member of Arise Business Club and unlock exclusive benefits,
          resources, and opportunities.
        </p>

        <p className="info-text">
          Sign up now and start your journey towards financial success!
        </p>

        <button className="arise-button w-[200px] my-10">Join Now</button>
      </div>
    </section>
  );
};

export default JoinNow;
