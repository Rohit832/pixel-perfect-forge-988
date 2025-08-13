import React from 'react';
import { PlanBadge } from './PlanBadge';
import { PlanDetails } from './PlanDetails';
import { SlotWarning } from './SlotWarning';
import { PlanChart } from './PlanChart';

interface PricingCardProps {
  onSlotBooking?: () => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({ onSlotBooking }) => {
  const handleSlotBooking = () => {
    console.log('Slot booking initiated');
    if (onSlotBooking) {
      onSlotBooking();
    }
  };

  const planFeatures = [
    '✓ Monthly optimization',
    '✓ Elite proximity access',
    '✓ Highest LTV model'
  ];

  return (
    <article className="bg-[rgba(248,244,242,1)] w-full pt-[27px] pb-[65px] px-9 rounded-[20px] border-black border-solid border-[5px] max-md:max-w-full max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <aside className="w-[32%] max-md:w-full max-md:ml-0">
          <div className="w-full self-stretch text-black font-bold my-auto max-md:mt-10">
            <header>
              <PlanBadge
                label="LEGENDARY"
                iconSrc="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/e8500d95acd8e57909efebe69837b792e676207d?placeholderIfAbsent=true"
                iconAlt="Legendary plan icon"
              />
            </header>
            
            <div className="flex items-stretch gap-5 justify-between mt-4">
              <div 
                className="border-neutral-200 border w-0.5 shrink-0 h-[473px] border-solid" 
                role="separator"
                aria-orientation="vertical"
              />
              
              <main>
                <PlanDetails
                  title="Funded brands scaling fast"
                  features={planFeatures}
                  description="This is for elite proximity"
                  currentPrice={{
                    inr: '₹252,875',
                    usd: '$2,975'
                  }}
                  originalPrice="₹297,500"
                  ctaText="Find Slot"
                  onCtaClick={handleSlotBooking}
                />
              </main>
            </div>
          </div>
        </aside>
        
        <section className="w-[68%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col items-stretch text-base text-[rgba(219,68,55,1)] font-normal max-md:max-w-full max-md:mt-10">
            <SlotWarning
              message=" Only 2 open slots/month"
              iconSrc="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/6ae72c071ba36f61278ed42b74e999e1be8f1b35?placeholderIfAbsent=true"
            />
            
            <PlanChart
              imageSrc="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/aa437d6724f5bbd4c9b4686b5ad626c04f59ad1f?placeholderIfAbsent=true"
              imageAlt="Performance metrics and analytics chart"
            />
          </div>
        </section>
      </div>
    </article>
  );
};
