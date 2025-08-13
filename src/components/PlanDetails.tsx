import React, { useState } from 'react';

interface PlanDetailsProps {
  title: string;
  features: string[];
  description: string;
  currentPrice: {
    inr: string;
    usd: string;
  };
  originalPrice: string;
  ctaText: string;
  onCtaClick?: () => void;
}

export const PlanDetails: React.FC<PlanDetailsProps> = ({
  title,
  features,
  description,
  currentPrice,
  originalPrice,
  ctaText,
  onCtaClick
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCtaClick = async () => {
    setIsLoading(true);
    try {
      if (onCtaClick) {
        await onCtaClick();
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-stretch mt-[54px] max-md:mt-10">
      <header>
        <h2 className="text-base max-md:ml-2 max-md:mr-1 font-bold text-black">
          {title}
        </h2>
      </header>
      
      <section className="text-base mr-[22px] mt-12 max-md:ml-2 max-md:mr-2.5 max-md:mt-10 text-black font-bold">
        <ul className="list-none space-y-1" role="list">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        
        <p className="mt-4">
          {description}
        </p>
      </section>

      <div className="flex items-stretch gap-[11px] font-normal whitespace-nowrap mt-[119px] max-md:ml-2 max-md:mt-10">
        <div className="text-[32px] text-black font-bold">
          {currentPrice.inr}
          <br />
          {currentPrice.usd}
        </div>
        <div className="text-base line-through mt-[11px] text-black">
          {originalPrice}
        </div>
      </div>

      <button
        onClick={handleCtaClick}
        disabled={isLoading}
        className="bg-[rgba(248,90,31,1)] shadow-[3px_-4px_0px_rgba(0,0,0,1)] border flex min-h-11 items-center gap-1.5 text-xl font-normal justify-center mt-[26px] px-1.5 py-[11px] rounded-md border-black border-solid text-black hover:bg-[rgba(248,90,31,0.9)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        type="button"
        aria-label={`${ctaText} - Current price ${currentPrice.usd}`}
      >
        <span className="self-stretch my-auto">
          {isLoading ? 'Loading...' : ctaText}
        </span>
      </button>
    </div>
  );
};
