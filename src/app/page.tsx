import { Benefits } from '@/components/benefits';
import { FAQ } from '@/components/faq';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { HowItWorks } from '@/components/how-it-works';
import { Plans } from '@/components/plans';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Plans />
      <FAQ />
    </>
  );
}
