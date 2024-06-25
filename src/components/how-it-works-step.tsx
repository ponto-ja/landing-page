import { FC } from 'react';

type HowItWorksStepProps = {
  title: string;
  description: string;
};

export const HowItWorksStep: FC<HowItWorksStepProps> = ({ title, description }) => {
  return (
    <div className="max-w-[440px] w-full p-5 flex flex-col items-start justify-center gap-3 max-[750px]:max-w-full max-[750px]:p-0 max-[750px]:gap-1">
      <p className="font-inter font-bold text-base text-gray-700">{title}</p>
      <p className="w-full text-left font-inter font-normal text-base text-gray-600">
        {description}
      </p>
    </div>
  );
};
