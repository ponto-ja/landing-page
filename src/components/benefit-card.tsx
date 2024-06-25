import { ComponentType, FC } from 'react';

type BenefitCardProps = {
  icon: ComponentType<Record<string, unknown>>;
  title: string;
  description: string;
};

export const BenefitCard: FC<BenefitCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="max-w-[440px] w-full p-5 flex flex-col items-center justify-center gap-3">
      <Icon size={30} color="#FFFFFF" />
      <p className="font-inter font-bold text-base text-white">{title}</p>
      <p className="w-full text-center font-inter font-light text-base text-white">
        {description}
      </p>
    </div>
  );
};
