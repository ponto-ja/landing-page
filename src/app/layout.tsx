import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--inter',
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ponto Já',
  description: 'Seu negócio com um programa de fidelidade em menos de 2 minutos',
  verification: {
    google: 'pHN4QZXyHWnUvfVdqi9acuSmc3AlZKHDL3LFjRdvhLM',
  },
  openGraph: {
    title: 'Ponto Já',
    description: 'Seu negócio com um programa de fidelidade em menos de 2 minutos',
    type: 'website',
    url: 'https://ponto-ja.com',
    images: 'https://pontoja.s3.amazonaws.com/gift.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${inter.variable} antialiased`}>
      <head>
        <script src="https://fast.wistia.com/assets/external/E-v1.js" async />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "nf33a0jmon"); 
          `,
          }}
        />
      </head>
      <body className="w-full h-screen">{children}</body>
    </html>
  );
}
