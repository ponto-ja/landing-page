import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { ZoomIn } from 'lucide-react';
import MockupPCImage from '@/assets/images/mockup-pc.png';

export const Mockup = () => {
  return (
    <div className="relative">
      <Zoom>
        <Image
          src={MockupPCImage.src}
          width={1280}
          height={0}
          alt="mockup"
          className="mx-auto max-[600px]:-mb-10"
        />
      </Zoom>
      <div className="absolute bottom-[-20px] flex w-full items-center justify-center gap-1">
        <ZoomIn color="#6b7280" size={18} />
        <p className="font-inter text-xs text-gray-500 font-semibold">
          Clique na imagem para expandir
        </p>
      </div>
    </div>
  );
};
