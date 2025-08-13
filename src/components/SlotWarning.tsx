import React from 'react';

interface SlotWarningProps {
  message: string;
  iconSrc: string;
}

export const SlotWarning: React.FC<SlotWarningProps> = ({ message, iconSrc }) => {
  return (
    <div 
      className="bg-[rgba(219,68,55,0.1)] border flex items-center justify-center p-2.5 rounded-[5px] border-[rgba(219,68,55,1)] border-solid"
      role="alert"
      aria-live="polite"
    >
      <img
        src={iconSrc}
        alt="Warning icon"
        className="aspect-[1] object-contain w-[17px] self-stretch shrink-0 my-auto"
      />
      <span className="self-stretch my-auto text-base text-[rgba(219,68,55,1)] font-normal">
        {message}
      </span>
    </div>
  );
};
