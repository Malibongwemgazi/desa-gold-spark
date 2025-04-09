
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import GoldCard from '@/components/dashboard/GoldCard';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        
        {/* Gold Card Highlight Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-banking-dark mb-6">
                  Introducing the <span className="text-banking-gold">DESA Gold Card</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Our exclusive gold card offers premium benefits tailored for those who demand excellence in every aspect of their financial life.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    'No annual fee for premium customers',
                    'Up to 2% cashback on all purchases',
                    'Comprehensive travel and purchase insurance',
                    'Exclusive access to airport lounges worldwide',
                    'Dedicated 24/7 concierge service'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 mr-3 p-1 rounded-full bg-banking-gold/20">
                        <Check size={14} className="text-banking-gold" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="bg-banking-DEFAULT hover:bg-banking-light group">
                  <span>Apply Now</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="lg:w-1/2 flex justify-center">
                <div className="transform rotate-6 transition-transform hover:rotate-0">
                  <GoldCard 
                    cardNumber="5678 9012 3456 7890"
                    cardHolder="VALUED CUSTOMER"
                    expiryDate="08/28"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-banking-dark mb-4">What Our Customers Say</h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                Hear from satisfied customers who have transformed their financial lives with DESA Bank.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "The gold card benefits have been exceptional, and the customer service team is always ready to help.",
                  author: "Sarah Johnson",
                  role: "Business Owner"
                },
                {
                  quote: "Their mobile banking app is intuitive and helps me stay on top of my finances wherever I am.",
                  author: "Michael Chen",
                  role: "Software Engineer"
                },
                {
                  quote: "The savings options helped me reach my financial goals much faster than I expected.",
                  author: "Amelia Rodriguez",
                  role: "Marketing Director"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg">
                  <div className="mb-6 text-banking-gold">
                    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 24H6C6 14 14 9.5 14 9.5V24ZM32 24H24C24 14 32 9.5 32 9.5V24Z" fill="currentColor"/>
                      <path d="M14 24H6C6 14 14 9.5 14 9.5M32 24H24C24 14 32 9.5 32 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 24V39M32 24V39" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-4 italic">{testimonial.quote}</p>
                  <div>
                    <div className="font-semibold text-banking-dark">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-banking-DEFAULT text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience Premium Banking?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Join thousands of satisfied customers who have chosen DESA Bank for their financial journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-banking-gold hover:bg-banking-goldDark text-banking-dark font-medium">
                Open an Account
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Contact an Advisor
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
