import { ImageWithFallback } from './figma/ImageWithFallback';

export function Technology() {
  return (
    <section id="technology" className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/50 rounded-full text-sm tracking-wider text-blue-400">
                INNOVATION
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl mb-6">
              Technology That
              <br />
              Drives You Forward
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our vehicles feature state-of-the-art technology that seamlessly integrates with your lifestyle. 
              From advanced driver assistance systems to intelligent cabin controls, every element is designed 
              to enhance your driving experience.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center">
                  <span className="text-blue-500">01</span>
                </div>
                <div>
                  <h3 className="mb-2">Autonomous Driving</h3>
                  <p className="text-gray-400 text-sm">
                    Advanced AI systems provide Level 3 autonomous driving capabilities
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center">
                  <span className="text-blue-500">02</span>
                </div>
                <div>
                  <h3 className="mb-2">Smart Cabin</h3>
                  <p className="text-gray-400 text-sm">
                    Personalized climate, lighting, and entertainment controls
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center">
                  <span className="text-blue-500">03</span>
                </div>
                <div>
                  <h3 className="mb-2">Predictive Maintenance</h3>
                  <p className="text-gray-400 text-sm">
                    Real-time diagnostics and proactive service scheduling
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full transition-colors">
              Explore Technology
            </button>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden">
            <div className="relative rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761264889291-52edcd3979b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkYXNoYm9hcmQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NTYyMDMzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Car technology dashboard"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
            </div>

            {/* Floating Stats */}
            <div className="absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
              <div className="text-3xl mb-1">15+</div>
              <div className="text-sm text-gray-400">Advanced Features</div>
            </div>

            <div className="absolute top-4 right-4 sm:-top-6 sm:-right-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
              <div className="text-3xl mb-1">AI</div>
              <div className="text-sm text-gray-400">Powered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
