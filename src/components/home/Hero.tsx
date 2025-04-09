
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-banking-DEFAULT to-banking-light text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Banking Designed for Your <span className="text-banking-gold">Financial Success</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Experience premium banking services with DESA Bank. Secure, reliable, and built around your needs with exclusive gold card benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-banking-gold hover:bg-banking-goldDark text-banking-dark font-medium">
              Open an Account
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <span>Explore Features</span>
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
