import { Popover } from '@headlessui/react';
import { ChatTeardropDots } from 'phosphor-react';
import { WidgetForm } from './WidgetForm';

export function Widget() {
  return (
    <Popover className='absolute right-4 bottom-4 flex flex-col items-end md:right-8 md:bottom-8'>
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className='group flex h-12 items-center rounded-full bg-brand-500 px-3 text-white'>
        <ChatTeardropDots className='size-6' />

        <span className='max-w-0 overflow-hidden transition-all duration-500 ease-linear group-hover:max-w-xs'>
          <span className='pl-2'>Feedback</span>
        </span>
      </Popover.Button>
    </Popover>
  );
}
