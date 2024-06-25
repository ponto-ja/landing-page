import Image from 'next/image';
import Link from 'next/link';
import LogoImage from '@/assets/images/logo.png';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from './ui/menubar';
import { Menu } from 'lucide-react';

const websiteBaseURL = process.env.NEXT_PUBLIC_WEBSITE_URL as string;

export const Header = () => {
  return (
    <header className="max-w-[1500px] w-full mx-auto pt-4 flex items-center justify-between px-4">
      <Link href="/" className="relative mr-14 max-[900px]:mr-8">
        <Image
          src={{
            src: LogoImage.src,
            width: 114,
            height: 40,
          }}
          alt="PontoJá"
        />
        <h1 className="absolute top-0 opacity-0">Ponto Já</h1>
      </Link>

      <nav className="mr-auto flex items-center gap-8 max-[850px]:hidden">
        <Link href="/#benefício" className="font-inter font-medium text-sm text-gray-700">
          Benefícios
        </Link>
        <Link
          href="/#como-funciona?"
          className="font-inter font-medium text-sm text-gray-700">
          Como funciona?
        </Link>
        <Link href="/#preços" className="font-inter font-medium text-sm text-gray-700">
          Preços
        </Link>
        <Link href="/#dúvidas" className="font-inter font-medium text-sm text-gray-700">
          Dúvidas
        </Link>
      </nav>

      <div className="flex items-center gap-8 max-[850px]:hidden">
        <Link
          href={websiteBaseURL.concat('/dono-de-negocio/entrar')}
          className="font-inter font-semibold text-sm text-gray-700"
          target="_blank"
          rel="no-referrer">
          Acessar conta
        </Link>
        <Link
          href={websiteBaseURL.concat('/dono-de-negocio/criar-conta')}
          className="bg-violet-900 text-white font-inter font-normal text-sm rounded-md py-[6px] px-3 hover:opacity-80 transition-opacity duration-300"
          target="_blank"
          rel="no-referrer">
          Criar conta grátis
        </Link>
      </div>

      <div className="hidden max-[850px]:block">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger className="text-gray-700 font-semibold">
              <Menu color="#374151" size={26} />
            </MenubarTrigger>
            <MenubarContent className="border p-1 mr-5 -mt-2">
              <MenubarItem className="focus:bg-violet-200 hover:bg-violet-200 font-inter font-medium text-sm text-gray-700 flex items-center gap-2">
                <Link href="/#benefício">Benefícios</Link>
              </MenubarItem>
              <MenubarItem className="focus:bg-violet-200 hover:bg-violet-200 font-inter font-medium text-sm text-gray-700 flex items-center gap-2">
                <Link href="/#como-funciona?">Como funciona?</Link>
              </MenubarItem>
              <MenubarItem className="focus:bg-violet-200 hover:bg-violet-200 font-inter font-medium text-sm text-gray-700 flex items-center gap-2">
                <Link href="/#preços">Preços</Link>
              </MenubarItem>
              <MenubarItem className="focus:bg-violet-200 hover:bg-violet-200 font-inter font-medium text-sm text-gray-700 flex items-center gap-2">
                <Link href="/#dúvidas">Dúvidas</Link>
              </MenubarItem>

              <MenubarSeparator />

              <MenubarItem className="focus:bg-violet-200 hover:bg-violet-200 font-inter font-medium text-sm text-gray-700 flex items-center gap-2">
                <Link
                  href={websiteBaseURL.concat('/dono-de-negocio/entrar')}
                  target="_blank"
                  rel="no-referrer">
                  Acessar conta
                </Link>
              </MenubarItem>
              <MenubarItem className="focus:bg-violet-200 hover:bg-violet-200 font-inter font-medium text-sm text-gray-700 flex items-center gap-2">
                <Link
                  href={websiteBaseURL.concat('/dono-de-negocio/criar-conta')}
                  target="_blank"
                  rel="no-referrer">
                  Criar conta grátis
                </Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </header>
  );
};
