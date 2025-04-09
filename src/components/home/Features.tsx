
import React from 'react';
import { CreditCard, Shield, PiggyBank, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <CreditCard className="w-8 h-8 text-banking-gold" />,
    title: 'Premium Gold Card',
    description: 'Access exclusive benefits with our signature gold card. Enjoy higher limits, cashback rewards, and premium services worldwide.'
  },
  {
    icon: <Shield className="w-8 h-8 text-banking-accent" />,
    title: 'Enhanced Security',
    description: 'Your financial security is our priority. Benefit from state-of-the-art encryption and continuous fraud monitoring.'
  },
  {
    icon: <PiggyBank className="w-8 h-8 text-banking-primary" />,
    title: 'Smart Savings',
    description: 'Achieve your financial goals faster with our competitive interest rates and automated savings programs.'
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-banking-secondary" />,
    title: 'Financial Insights',
    description: 'Track your spending patterns and receive personalized insights to help manage your money more effectively.'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-banking-light/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-banking-dark mb-4">
            Why Choose <span className="text-banking-DEFAULT">DESA</span> <span className="text-banking-primary">Bank</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Experience banking that puts your financial well-being first with features designed to make managing your money simple and rewarding.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg hover:border-banking-accent/30"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-banking-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
