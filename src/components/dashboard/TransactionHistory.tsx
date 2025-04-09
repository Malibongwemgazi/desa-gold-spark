
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownRight, ShoppingBag, Coffee, Car, Home, Smartphone } from 'lucide-react';

interface Transaction {
  id: string;
  title: string;
  amount: string;
  date: string;
  type: 'in' | 'out';
  category: 'shopping' | 'food' | 'transport' | 'housing' | 'utilities';
}

const getTransactionIcon = (category: Transaction['category']) => {
  switch (category) {
    case 'shopping':
      return <ShoppingBag size={16} />;
    case 'food':
      return <Coffee size={16} />;
    case 'transport':
      return <Car size={16} />;
    case 'housing':
      return <Home size={16} />;
    case 'utilities':
      return <Smartphone size={16} />;
    default:
      return <ShoppingBag size={16} />;
  }
};

const TransactionHistory = () => {
  const transactions: Transaction[] = [
    {
      id: '1',
      title: 'Amazon Purchase',
      amount: '$85.32',
      date: 'Apr 8, 2025',
      type: 'out',
      category: 'shopping'
    },
    {
      id: '2',
      title: 'Salary Deposit',
      amount: '$3,500.00',
      date: 'Apr 5, 2025',
      type: 'in',
      category: 'housing'
    },
    {
      id: '3',
      title: 'Starbucks Coffee',
      amount: '$6.20',
      date: 'Apr 4, 2025',
      type: 'out',
      category: 'food'
    },
    {
      id: '4',
      title: 'Uber Ride',
      amount: '$24.75',
      date: 'Apr 3, 2025',
      type: 'out',
      category: 'transport'
    },
    {
      id: '5',
      title: 'Phone Bill',
      amount: '$65.00',
      date: 'Apr 2, 2025',
      type: 'out',
      category: 'utilities'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${
                  transaction.type === 'in' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {transaction.type === 'in' ? <ArrowDownRight size={16} /> : getTransactionIcon(transaction.category)}
                </div>
                <div>
                  <div className="font-medium">{transaction.title}</div>
                  <div className="text-xs text-muted-foreground">{transaction.date}</div>
                </div>
              </div>
              <div className={`font-semibold ${
                transaction.type === 'in' ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.type === 'in' ? '+' : '-'}{transaction.amount}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionHistory;
