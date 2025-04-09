
import React from 'react';
import { CreditCard, Wifi } from 'lucide-react';

interface GoldCardProps {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
}

const GoldCard: React.FC<GoldCardProps> = ({ 
  cardNumber = "•••• •••• •••• 1234", 
  cardHolder = "John Doe", 
  expiryDate = "12/26" 
}) => {
  
  // Format card number with dots for first 3 groups and visible last 4 digits
  const formatCardNumber = (number: string) => {
    if (number.includes('••••')) return number; // Already formatted
    
    const last4 = number.slice(-4);
    return `•••• •••• •••• ${last4}`;
  };
  
  return (
    <div className="gold-card w-full max-w-md h-56 p-6 text-banking-dark">
      <div className="card-shine"></div>
      
      <div className="flex flex-col h-full justify-between relative z-10">
        <div className="flex justify-between items-start">
          <div className="text-xl font-bold">DESA GOLD</div>
          <Wifi size={24} className="transform rotate-90" />
        </div>
        
        <div className="my-4">
          <div className="text-lg font-medium tracking-widest">
            {formatCardNumber(cardNumber)}
          </div>
        </div>
        
        <div className="flex justify-between items-end">
          <div>
            <div className="text-xs opacity-80 mb-1">CARD HOLDER</div>
            <div className="font-medium">{cardHolder}</div>
          </div>
          
          <div className="text-right">
            <div className="text-xs opacity-80 mb-1">EXPIRES</div>
            <div className="font-medium">{expiryDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldCard;
