
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GoldCard from '@/components/dashboard/GoldCard';
import AccountSummary from '@/components/dashboard/AccountSummary';
import TransactionHistory from '@/components/dashboard/TransactionHistory';
import { Button } from '@/components/ui/button';
import { PlusCircle, Download, ArrowRightLeft, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-banking-dark">Dashboard</h1>
              <p className="text-gray-600">Welcome back, John Doe</p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
              <Button size="sm" variant="outline" className="flex items-center gap-1">
                <Download size={16} />
                <span>Export</span>
              </Button>
              <Button size="sm" className="bg-banking-DEFAULT hover:bg-banking-light flex items-center gap-1">
                <PlusCircle size={16} />
                <span>New Transaction</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-lg">Account Overview</CardTitle>
                  <CardDescription>Your financial summary as of April 9, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <AccountSummary />
                </CardContent>
              </Card>

              <Tabs defaultValue="all" className="w-full">
                <div className="flex justify-between items-center mb-4">
                  <TabsList>
                    <TabsTrigger value="all">All Transactions</TabsTrigger>
                    <TabsTrigger value="incoming">Incoming</TabsTrigger>
                    <TabsTrigger value="outgoing">Outgoing</TabsTrigger>
                  </TabsList>
                  <Button variant="ghost" size="sm" className="text-xs flex items-center gap-1">
                    <Clock size={14} />
                    <span>Transaction History</span>
                  </Button>
                </div>
                
                <TabsContent value="all">
                  <TransactionHistory />
                </TabsContent>
                <TabsContent value="incoming">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Incoming Transactions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Showing only incoming transactions.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="outgoing">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Outgoing Transactions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Showing only outgoing transactions.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Your DESA Gold Card</h3>
                <GoldCard 
                  cardNumber="•••• •••• •••• 1234"
                  cardHolder="John Doe"
                  expiryDate="12/26"
                />
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1">Card Details</Button>
                  <Button variant="outline" size="sm" className="flex-1">Manage Card</Button>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <ArrowRightLeft size={16} className="mr-2" />
                    <span>Transfer Money</span>
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download size={16} className="mr-2" />
                    <span>Download Statement</span>
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <PlusCircle size={16} className="mr-2" />
                    <span>Add Payment Method</span>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
