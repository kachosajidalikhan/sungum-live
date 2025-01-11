import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { files } from "../../constants/index";

export default () => {
  return (
    <section className="pt-12 ftco-section ">
      <div className="container mx-auto px-6">
        <div className="md:flex block justify-center items-center">
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div
              className="h-80 md:h-[24rem] bg-cover bg-center rounded-lg shadow"
              style={{ backgroundImage: `url(${files.testimony_img})` }}
            ></div>
          </div>
          <div className="w-full md:w-1/2 px-6 md:px-10">
            <div className="py-10">
              <div className="mb-8">
                <span className="text-lg text-[#c59a63] font-semibold">Testimony</span>
                <h2 className="text-[#293941] md:text-3xl text-xl font-bold mt-2">Happy Customers</h2>
              </div>

              {/* React Responsive Carousel */}
              <Carousel
                showThumbs={false} // Hide thumbnail images
                autoPlay={true} // Enable auto play
                infiniteLoop={true} // Loop the carousel
                showStatus={false} // Hide carousel status (e.g., '1 of 4')
                emulateTouch={true} // Enable swipe gestures on mobile
                interval={5000} // Set autoplay interval (5 seconds)
                className="carousel-testimony"
              >
                {/* Review 1 */}
                <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                  <div className="text mb-4">
                    <p className="text-gray-600">
                      SunGum Skardu is truly a paradise! The serene river nearby adds to the charm,
                      and the hospitality here is unmatched. Every moment felt magical, and I can't
                      wait to visit again!
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="ml-4">
                      <p className="text-[#293941] text-lg font-semibold">Asghar Ali</p>
                      <span className="text-gray-500">Businessman</span>
                    </div>
                  </div>
                </div>

                {/* Review 2 */}
                <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                  <div className="text mb-4">
                    <p className="text-gray-600">
                      A perfect retreat! The breathtaking views and peaceful environment at SunGum
                      Skardu made it a trip to remember. Highly recommended!
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="ml-4">
                      <p className="text-[#293941] text-lg font-semibold">Sara Khan</p>
                      <span className="text-gray-500">Photographer</span>
                    </div>
                  </div>
                </div>

                {/* Review 3 */}
                <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                  <div className="text mb-4">
                    <p className="text-gray-600">
                      SunGum Skardu exceeded all expectations! From the stunning landscapes to the
                      incredible service, everything was top-notch. Will definitely return!
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="ml-4">
                      <p className="text-[#293941] text-lg font-semibold">Ahmed Raza</p>
                      <span className="text-gray-500">Travel Blogger</span>
                    </div>
                  </div>
                </div>

                {/* Review 4 */}
                <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                  <div className="text mb-4">
                    <p className="text-gray-600">
                      Amazing place and fantastic people! SunGum Skardu felt like home, with
                      breathtaking views that left me in awe. A must-visit destination.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="ml-4">
                      <p className="text-[#293941] text-lg font-semibold">Fatima Noor</p>
                      <span className="text-gray-500">Entrepreneur</span>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
