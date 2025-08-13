import React from 'react';

interface PlanBadgeProps {
  label: string;
  iconSrc: string;
  iconAlt?: string;
}

export const PlanBadge: React.FC<PlanBadgeProps> = ({ 
  label, 
  iconSrc, 
  iconAlt = "Plan icon" 
}) => {
  return (
    <div className="flex w-[173px] max-w-full items-stretch gap-2 text-base whitespace-nowrap">
      <div className="bg-[rgba(248,90,31,1)] border flex min-h-[23px] items-center gap-2.5 justify-center mt-1.5 px-[9px] py-[7px] border-black border-solid">
        <span className="self-stretch my-auto font-bold text-black">
          {label}
        </span>
      </div>
      <img
        src={iconSrc}
        alt={iconAlt}
        className="aspect-[1.52] object-contain w-[73px] shrink-0"
      />
    </div>
  );
};
