import React from 'react';
import { PricingCard } from '@/components/PricingCard';
import { toast } from 'sonner';

const Index = () => {
  const handleSlotBooking = () => {
    toast.success('Slot booking request submitted! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Premium Business Plans
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Accelerate your business growth with our elite proximity access and optimization services designed for funded brands.
          </p>
        </header>
        
        <main>
          <PricingCard onSlotBooking={handleSlotBooking} />
        </main>
        
        <footer className="text-center mt-12 text-gray-500">
          <p>Limited availability - Only 2 slots available per month</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
