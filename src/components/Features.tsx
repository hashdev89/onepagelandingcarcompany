import { Zap, Shield, Cpu, Battery } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Instant Power',
      description: 'Experience immediate torque delivery with our advanced electric motors'
    },
    {
      icon: Shield,
      title: 'Advanced Safety',
      description: 'Top-tier safety ratings with autonomous driving capabilities'
    },
    {
      icon: Cpu,
      title: 'Smart Technology',
      description: 'AI-powered systems that learn and adapt to your driving style'
    },
    {
      icon: Battery,
      title: 'Extended Range',
      description: 'Go further with our next-generation battery technology'
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">Built for Excellence</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every detail engineered to perfection, combining cutting-edge technology with timeless design
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-blue-600/10 rounded-xl flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-blue-500" />
                </div>
              </div>
              <h3 className="text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
