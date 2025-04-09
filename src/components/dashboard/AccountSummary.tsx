
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownRight, CreditCard, DollarSign } from 'lucide-react';

interface BalanceCardProps {
  title: string;
  amount: string;
  icon: React.ReactNode;
  change?: {
    amount: string;
    isPositive: boolean;
  };
}

const BalanceCard: React.FC<BalanceCardProps> = ({ title, amount, icon, change }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className="p-1.5 bg-muted rounded-full">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{amount}</div>
        {change && (
          <div className="flex items-center mt-1">
            {change.isPositive ? (
              <ArrowUpRight size={16} className="text-green-500 mr-1" />
            ) : (
              <ArrowDownRight size={16} className="text-red-500 mr-1" />
            )}
            <span className={`text-xs ${change.isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {change.amount} {change.isPositive ? 'increase' : 'decrease'}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const AccountSummary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <BalanceCard 
        title="Current Balance" 
        amount="$24,563.00" 
        icon={<DollarSign size={18} />}
        change={{ amount: "3.5%", isPositive: true }}
      />
      <BalanceCard 
        title="Savings" 
        amount="$12,750.00" 
        icon={<DollarSign size={18} />}
        change={{ amount: "2.1%", isPositive: true }}
      />
      <BalanceCard 
        title="Credit Limit" 
        amount="$20,000.00" 
        icon={<CreditCard size={18} />}
      />
      <BalanceCard 
        title="Monthly Spending" 
        amount="$3,250.00" 
        icon={<DollarSign size={18} />}
        change={{ amount: "1.2%", isPositive: false }}
      />
    </div>
  );
};

export default AccountSummary;
