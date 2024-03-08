import React from "react";
import Footer from "./components/Footer";
import AppBar from "./components/AppBar";
import CustomCarousel from "./components/CustomCarousel";

const images = [
  { src: "/picture-1.jpg", alt: "Arise Cover 1" },
  { src: "/picture-2.jpg", alt: "Arise Cover 2" },
  { src: "/picture-3.jpg", alt: "Arise Cover 3" },
  { src: "/picture-4.jpg", alt: "Arise Cover 4" },
];

const HomePage = () => (
  <main className="flex min-h-screen flex-col items-center justify-between px-24">
    <div className="container mx-auto px-5 my-0">
      <AppBar />

      <section>
        <div className="mb-10 lg:mb-20">
          <CustomCarousel images={images} />
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
          <div>
            <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
              Welcome to Arise Business Club
            </h3>
          </div>
          <div>
            <div className="text-lg leading-relaxed mb-4">
              <p>
                Arise Business Club is more than just a community; it&apos;s a
                movement fueled by integrity, innovation, and an unwavering
                commitment to success. With a vision to uplift individuals from
                the depths of adversity and stagnation, we empower you to rise
                to new heights and reclaim control over your life and destiny.
                This is Arise Business Club – Where Making a difference starts
                with you!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="my-15 mb-20">
          <h2 className="mb-8 text-6xl md:text-6xl font-bold tracking-tighter leading-tight">
            Club Description
          </h2>

          <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
            <div className="text-lg leading-relaxed mb-4">
              <p>
                At Arise Business Club, we believe in more than just business
                success; we believe in making a meaningful difference in the
                world. That&apos;s why we&apos;ve created a unique platform that
                combines business networking with philanthropic initiatives,
                bringing together like-minded individuals who are passionate
                about both professional growth and social impact. Our club
                serves as a hub for entrepreneurs, business leaders, and
                changemakers who are committed to using their skills, resources,
                and influence to drive positive change in their communities and
                beyond. Through a series of curated events, workshops, and
                projects, we aim to harness the collective power of our members
                to address pressing social issues, support charitable causes,
                and create lasting impact.
              </p>
            </div>

            <div className="text-lg leading-relaxed mb-4">
              <p>
                By linking philanthropic activities with our business community,
                we not only strengthen our connections and collaborations but
                also amplify our collective ability to make a difference.
                Whether it&apos;s through fundraising efforts, volunteer
                initiatives, or strategic partnerships, we empower our members
                to contribute their time, expertise, and resources to causes
                they care about, while also building meaningful relationships
                and expanding their professional networks. Join us at Arise
                Business Club and be part of a community that not only
                celebrates business success but also values social
                responsibility and civic engagement. Together, we can leverage
                our collective talents and passions to create a brighter, more
                inclusive future for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </main>
);

export default HomePage;
