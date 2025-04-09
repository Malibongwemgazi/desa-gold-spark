
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/layout/Navbar';

const Savings = () => {
  const savingsGoals = [
    { name: 'New Car', current: 4500, target: 15000, percent: 30 },
    { name: 'Vacation', current: 2200, target: 3000, percent: 73 },
    { name: 'Emergency Fund', current: 8000, target: 10000, percent: 80 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Savings Goals</h1>
        
        <div className="grid gap-6">
          {savingsGoals.map((goal, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{goal.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <Progress value={goal.percent} className="h-2" />
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>${goal.current.toLocaleString()}</span>
                  <span className="text-muted-foreground">{goal.percent}%</span>
                  <span>${goal.target.toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Separator className="my-8" />
        
        <Card>
          <CardHeader>
            <CardTitle>Savings Tips</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>• Set up automatic transfers to your savings account</p>
            <p>• Follow the 50/30/20 rule: 50% for needs, 30% for wants, 20% for savings</p>
            <p>• Use roundup features to save spare change from transactions</p>
            <p>• Review and cut unnecessary subscriptions</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Savings;
