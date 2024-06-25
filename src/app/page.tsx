import { Benefits } from '@/components/benefits';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { HowItWorks } from '@/components/how-it-works';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <HowItWorks />
    </>
  );
}
