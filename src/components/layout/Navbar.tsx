
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@/components/ui/Logo';
import { Button } from '@/components/ui/button';
import { 
  User, 
  CreditCard, 
  PiggyBank, 
  ArrowRightLeft, 
  Menu, 
  X 
} from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Accounts', path: '/dashboard' },
  { name: 'Cards', path: '/cards' },
  { name: 'Savings', path: '/savings' },
  { name: 'Transfers', path: '/transfers' },
];

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getIcon = (name: string) => {
    switch(name) {
      case 'Accounts':
        return <User size={16} />;
      case 'Cards':
        return <CreditCard size={16} />;
      case 'Savings':
        return <PiggyBank size={16} />;
      case 'Transfers':
        return <ArrowRightLeft size={16} />;
      default:
        return null;
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-1.5 text-sm font-medium hover:text-banking-accent transition-colors ${
                    location.pathname === link.path ? 'text-banking-accent' : 'text-gray-600'
                  }`}
                >
                  {getIcon(link.name)}
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm" className="bg-banking-DEFAULT hover:bg-banking-light">Get Started</Button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-4 pb-4 md:hidden">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-2 py-2 px-3 rounded-md text-sm font-medium ${
                    location.pathname === link.path 
                      ? 'bg-banking-goldLight text-banking-dark' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {getIcon(link.name)}
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <Button variant="outline" size="sm">Sign In</Button>
                <Button size="sm" className="bg-banking-DEFAULT hover:bg-banking-light">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
