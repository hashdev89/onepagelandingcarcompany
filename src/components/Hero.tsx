import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1559930449-9211652bac34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBmcm9udHxlbnwxfHx8fDE3NjU2MzQyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/50 rounded-full text-sm tracking-wider text-blue-400">
            NEW RELEASE 2025
          </span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
          The Future of
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Performance
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Experience unparalleled power, precision, and luxury in our latest electric vehicle lineup
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 transition-colors">
            Explore Models
          </button>
          <button className="w-full sm:w-auto border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors">
            Watch Video
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div>
            <div className="text-3xl sm:text-4xl mb-2">0-60</div>
            <div className="text-sm text-gray-400">2.1 seconds</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl mb-2">520</div>
            <div className="text-sm text-gray-400">Miles range</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl mb-2">1020</div>
            <div className="text-sm text-gray-400">Horsepower</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  );
}
