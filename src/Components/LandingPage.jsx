import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-white-50">
      {/* Header */}
      <header className="text-center p-8 bg-yellow-100">
        <div className="flex justify-center items-center">
          <img src="your-logo-url" alt="ExpressVPN Logo" className="h-8" />
        </div>
        <h1 className="text-4xl font-bold text-white-800 mt-4">
          The VPN that just works
        </h1>
        <p className="text-lg text-white-600 mt-2">
          Go further with the #1 trusted leader in VPN
        </p>
        <button className="mt-6 bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-500">
          Get ExpressVPN
        </button>
        <p className="text-sm text-white-500 mt-2">30-day money-back guarantee</p>
      </header>

      
      {/* Sections */}
      <section className="text-center p-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img src="secure-image-url" alt="Secure Access" className="mx-auto h-20" />
            <h2 className="text-2xl font-semibold text-white-800 mt-4">Secure access, worldwide</h2>
            <p className="text-white-600 mt-2">
              Connect reliably from anywhere, to anywhere. Our network of high-speed servers
              across 94 countries puts you in control.
            </p>
            <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-500">
              Get ExpressVPN
            </button>
          </div>
          <div>
            <img src="safer-image-url" alt="Safer Internet" className="mx-auto h-20" />
            <h2 className="text-2xl font-semibold text-white-800 mt-4">One click to a safer internet</h2>
            <p className="text-white-600 mt-2">
              Going online doesn't have to mean being exposed. Whether you're shopping from your
              desk or just connecting at a cafe, keep your personal information more private and secure.
            </p>
          </div>
          <div>
            <img src="devices-image-url" alt="Devices" className="mx-auto h-20" />
            <h2 className="text-2xl font-semibold text-white-800 mt-4">Use ExpressVPN on every device</h2>
            <p className="text-white-600 mt-2">
              Phone, tablet, computer, router—no matter where you are or what devices you're using,
              a single ExpressVPN subscription has got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="text-center p-8 bg-white-100">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img src="protection-image-url" alt="Protection" className="mx-auto h-16" />
            <h3 className="text-xl font-semibold text-white-800 mt-4">Stronger data protection</h3>
            <p className="text-white-600 mt-2">
              Take charge of your online privacy and security with best-in-class encryption.
            </p>
          </div>
          <div>
            <img src="seamless-image-url" alt="Seamless" className="mx-auto h-16" />
            <h3 className="text-xl font-semibold text-white-800 mt-4">Works seamlessly everywhere</h3>
            <p className="text-white-600 mt-2">
              Experience the internet the way it’s meant to be. On the go, or on your couch.
            </p>
          </div>
          <div>
            <img src="connectivity-image-url" alt="Connectivity" className="mx-auto h-16" />
            <h3 className="text-xl font-semibold text-white-800 mt-4">Lightning-quick connectivity</h3>
            <p className="text-white-600 mt-2">
              Our VPN network is built for speed, powered by next-generation technology.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="text-center p-8">
        <h2 className="text-2xl font-semibold text-white-800">Ultra-fast servers around the globe</h2>
        <img src="map-image-url" alt="Server Map" className="mx-auto mt-4 h-64" />
        <p className="text-white-600 mt-2">
          160 locations | 94 countries | unlimited bandwidth
        </p>
        <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-500">
          See more advantages
        </button>
      </section>
    </div>
  );
};

export default LandingPage;
