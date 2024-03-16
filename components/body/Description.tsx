import React from "react";

const Description = () => {
  return (
    <section className="mt-10 lg:mt-20 pt-10 md:pt-20 bg-base-200 p-5 md:p-12 rounded-lg">
      <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-6 text-center">
        Club Description
      </h2>

      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-26 md:mb-8 text-center md:text-left">
        <div className="text-lg leading-relaxed mb-4">
          <p>
            At Arise Business Club, we believe in more than just business
            success; we believe in making a meaningful difference in the world.
            That&apos;s why we&apos;ve created a unique platform that combines
            business networking with philanthropic initiatives, bringing
            together like-minded individuals who are passionate about both
            professional growth and social impact. Our club serves as a hub for
            entrepreneurs, business leaders, and changemakers who are committed
            to using their skills, resources, and influence to drive positive
            change in their communities and beyond. Through a series of curated
            events, workshops, and projects, we aim to harness the collective
            power of our members to address pressing social issues, support
            charitable causes, and create lasting impact.
          </p>
        </div>

        <div className="text-lg leading-relaxed mb-4">
          <p>
            By linking philanthropic activities with our business community, we
            not only strengthen our connections and collaborations but also
            amplify our collective ability to make a difference. Whether
            it&apos;s through fundraising efforts, volunteer initiatives, or
            strategic partnerships, we empower our members to contribute their
            time, expertise, and resources to causes they care about, while also
            building meaningful relationships and expanding their professional
            networks. Join us at Arise Business Club and be part of a community
            that not only celebrates business success but also values social
            responsibility and civic engagement. Together, we can leverage our
            collective talents and passions to create a brighter, more inclusive
            future for all.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Description;
