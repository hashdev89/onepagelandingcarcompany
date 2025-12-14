import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Models() {
  const models = [
    {
      name: 'V-Sport',
      tagline: 'Performance Redefined',
      image: 'https://images.unsplash.com/photo-1559930449-9211652bac34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBmcm9udHxlbnwxfHx8fDE3NjU2MzQyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: 'Starting at $89,000',
      specs: ['0-60 in 2.1s', '520 mi range', '1020 hp']
    },
    {
      name: 'V-Luxe',
      tagline: 'Luxury Meets Innovation',
      image: 'https://images.unsplash.com/photo-1729009390145-52c7f50f7ec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjU2NzY4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: 'Starting at $125,000',
      specs: ['0-60 in 2.8s', '450 mi range', '750 hp']
    },
    {
      name: 'V-Urban',
      tagline: 'City Driving Evolved',
      image: 'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNhciUyMGNoYXJnaW5nfGVufDF8fHx8MTc2NTYxODUzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: 'Starting at $52,000',
      specs: ['0-60 in 4.2s', '300 mi range', '400 hp']
    }
  ];

  return (
    <section id="models" className="py-24 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">Our Models</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from our range of electric vehicles, each designed to deliver exceptional performance
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className="group bg-black border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl mb-2">{model.name}</h3>
                  <p className="text-blue-400 text-sm">{model.tagline}</p>
                </div>

                <div className="mb-6 space-y-2">
                  {model.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1 h-1 bg-blue-500 rounded-full" />
                      {spec}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <span className="text-gray-300">{model.price}</span>
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
