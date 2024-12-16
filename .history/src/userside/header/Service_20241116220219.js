import React from "react";

// Service Page Component
const Service = () => {
  return (
    <div className="container mx-auto px-6 lg:px-16 py-10">
      {/* Hero Section */}
      <div className="relative h-80 lg:h-[450px] mb-16">
        <img
          src="https://media.istockphoto.com/id/1132526896/photo/property-auction-gavel-wooden-and-miniature-car-model-in-shopping-cart-on-nature-green.jpg?s=1024x1024&w=is&k=20&c=MSRjJTQQ2We8Tnaj4hqQRTjLeZCrU3Rr6zt1Lzf-3JI="
          alt="Car service center"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl lg:text-6xl font-extrabold mb-4">
            Our Services
          </h1>
          <p className="text-white text-lg lg:text-xl">
            Comprehensive Auction and Vehicle Services Tailored for You
          </p>
        </div>
      </div>

      {/* Services Introduction */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Your Trusted Partner in Vehicle Auctions
        </h2>
        <p className="text-gray-600 lg:text-lg">
          At Bid Cars India, we aim to redefine the automotive auction
          experience by offering innovative and reliable solutions for buyers
          and sellers. From online bidding to vehicle verification and ownership
          transfer, we've got you covered.
        </p>
      </div>

      {/* Service Features Grid */}
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        {[
          {
            title: "Online Bidding Platform",
            description:
              "State-of-the-art platform offering real-time bidding, alerts, and analytics.",
            image:
              "https://img.freepik.com/premium-photo/online-payment-platform-modish-money-transfer_31965-432905.jpg?ga=GA1.1.1164171818.1702719834&semt=ais_hybrid",
          },
          {
            title: "Vehicle Inspection",
            description:
              "Certified experts inspect and verify every vehicle for quality assurance.",
            image: "/images/vehicle-inspection.png",
          },
          {
            title: "Documentation Support",
            description:
              "Full assistance with legal documentation and ownership transfer processes.",
            image: "/images/documentation-support.png",
          },
          {
            title: "Auction Guidance",
            description:
              "Expert advice on maximizing your returns through smart auction strategies.",
            image: "/images/auction-guidance.png",
          },
          {
            title: "Post-Sale Support",
            description:
              "After-sale services include logistics support and vehicle tracking.",
            image: "/images/post-sale-support.png",
          },
          {
            title: "Customer Support",
            description:
              "Dedicated customer service to assist you at every step of the auction process.",
            image: "/images/customer-support.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w- h- mx-auto mb-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      {/* How We Work Section */}
      <div className="bg-gray-50 py-16 px-8 lg:px-16 rounded-lg shadow-inner mb-16">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
          How We Work
        </h3>
        <div className="grid md:grid-cols-4 gap-10 text-center">
          {[
            {
              step: "1",
              title: "Sign Up",
              desc: "Create your account and get verified to access auctions.",
            },
            {
              step: "2",
              title: "List/Inspect",
              desc: "List your vehicle for auction or book an inspection.",
            },
            {
              step: "3",
              title: "Bid/Buy",
              desc: "Participate in live auctions or buy vehicles directly.",
            },
            {
              step: "4",
              title: "Complete Transfer",
              desc: "Finalize deals with smooth documentation support.",
            },
          ].map((process, index) => (
            <div key={index}>
              <div className="w-14 h-14 bg-red-600 text-white text-lg font-bold flex items-center justify-center mx-auto rounded-full mb-6">
                {process.step}
              </div>
              <h4 className="font-semibold text-xl text-gray-800 mb-2">
                {process.title}
              </h4>
              <p className="text-gray-600">{process.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What Our Clients Say
        </h3>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              name: "Rahul Sharma",
              feedback:
                "The auction process was smooth and transparent. Highly recommend Bid Cars India!",
            },
            {
              name: "Priya Mehta",
              feedback:
                "Exceptional customer support and professional handling of all documentation.",
            },
            {
              name: "Amit Gupta",
              feedback:
                "I sold my vehicle at the best price. The team ensured everything went perfectly.",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">
                "{testimonial.feedback}"
              </p>
              <h4 className="font-bold text-gray-800 text-lg text-right">
                - {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mb-16">
        <button className="bg-red-600 text-white text-lg px-10 py-4 rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition">
          Start Your Journey with Us
        </button>
      </div>
    </div>
  );
};

export default Service;
