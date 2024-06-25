import Link from 'next/link';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

type CTAToWebsiteProps = {
  title: string;
  className?: string;
};

const websiteBaseURL = process.env.NEXT_PUBLIC_WEBSITE_URL as string;

export const CTAToWebsite: FC<CTAToWebsiteProps> = ({ title, className = '' }) => {
  return (
    <Link
      href={websiteBaseURL.concat('/dono-de-negocio/criar-conta')}
      className={twMerge(
        'bg-violet-900 text-white font-inter font-normal text-base rounded-md py-2 px-3 hover:opacity-80 transition-opacity duration-300 mx-auto block w-fit mt-12',
        className,
      )}
      target="_blank"
      rel="no-referrer">
      {title}
    </Link>
  );
};
