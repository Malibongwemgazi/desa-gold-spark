
import React from 'react';
import Logo from '@/components/ui/Logo';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-banking-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo className="text-white" />
            <p className="mt-4 text-sm text-gray-300">
              DESA Bank provides secure, reliable banking services to help you achieve your financial goals.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-banking-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-banking-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-banking-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-banking-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-banking-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Checking Accounts</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Savings Accounts</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Credit Cards</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Loans</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Mortgages</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Financial Education</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Security</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Mobile Banking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Locations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">1234 Banking Avenue</li>
              <li className="text-gray-300 text-sm">Financial District, NY 10005</li>
              <li className="text-gray-300 text-sm">customer.service@desabank.com</li>
              <li className="text-gray-300 text-sm">1-800-DESA-BANK</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} DESA Bank. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4 text-xs text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
