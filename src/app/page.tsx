import { Benefits } from '@/components/benefits';
import { CTAToWebsite } from '@/components/cta-to-website';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { HowItWorks } from '@/components/how-it-works';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <CTAToWebsite title="Quero fidelizar meus clientes" className="bg-[#d41d4c]" />
      <HowItWorks />
      <CTAToWebsite title="Quero usar no meu negócio" className="bg-[#25BFBF]" />
    </>
  );
}
