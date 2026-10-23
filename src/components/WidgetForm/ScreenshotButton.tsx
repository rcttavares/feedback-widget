import html2canvas from 'html2canvas-pro';
import { Camera, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Loading } from '../Loading';

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton({
  screenshot,
  onScreenshotTook,
}: ScreenshotButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleTakeScreenshot() {
    setIsLoading(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');

    onScreenshotTook(base64image);

    setIsLoading(false);
  }

  if (screenshot) {
    return (
      <button
        type='button'
        className='flex size-10 items-end justify-end rounded-md border-transparent p-1 text-zinc-400 transition-colors hover:text-zinc-100'
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}
        onClick={() => onScreenshotTook(null)}
      >
        <Trash weight='fill' />
      </button>
    );
  }

  return (
    <button
      type='button'
      className='rounded-md border-transparent bg-zinc-800 p-2 transition-colors hover:bg-zinc-700 focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:outline-hidden'
      onClick={handleTakeScreenshot}
    >
      {isLoading ? <Loading /> : <Camera className='size-6' />}
    </button>
  );
}
