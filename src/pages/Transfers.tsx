
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRightLeft, Users, Globe, Clock } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

const Transfers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Transfers</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="p-2 w-10 h-10 rounded-full bg-banking-goldLight flex items-center justify-center mb-2">
                <ArrowRightLeft className="text-banking-DEFAULT" size={20} />
              </div>
              <CardTitle className="text-lg">Between Accounts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Move money between your DESA accounts</p>
              <Button variant="outline" size="sm">Transfer</Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="p-2 w-10 h-10 rounded-full bg-banking-goldLight flex items-center justify-center mb-2">
                <Users className="text-banking-DEFAULT" size={20} />
              </div>
              <CardTitle className="text-lg">To Someone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Send money to friends and family</p>
              <Button variant="outline" size="sm">Send</Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="p-2 w-10 h-10 rounded-full bg-banking-goldLight flex items-center justify-center mb-2">
                <Globe className="text-banking-DEFAULT" size={20} />
              </div>
              <CardTitle className="text-lg">International</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Send money internationally</p>
              <Button variant="outline" size="sm">Transfer</Button>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock size={18} />
              Recent Transfers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">To: Jane Smith</span>
                  <span className="font-semibold text-red-600">-$250.00</span>
                </div>
                <div className="text-xs text-muted-foreground">April 5, 2025 • Rent payment</div>
              </div>
              
              <div className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">From: Savings to Checking</span>
                  <span className="font-semibold text-banking-accent">$500.00</span>
                </div>
                <div className="text-xs text-muted-foreground">April 3, 2025 • Internal Transfer</div>
              </div>
              
              <div className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">To: Robert Johnson</span>
                  <span className="font-semibold text-red-600">-$75.00</span>
                </div>
                <div className="text-xs text-muted-foreground">April 1, 2025 • Dinner</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Transfers;
