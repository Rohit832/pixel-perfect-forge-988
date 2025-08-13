import React from 'react';

interface PlanChartProps {
  imageSrc: string;
  imageAlt?: string;
}

export const PlanChart: React.FC<PlanChartProps> = ({ 
  imageSrc, 
  imageAlt = "Plan performance chart" 
}) => {
  return (
    <figure className="w-full">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="aspect-[0.94] object-contain w-full mt-1.5 max-md:max-w-full"
      />
    </figure>
  );
};
