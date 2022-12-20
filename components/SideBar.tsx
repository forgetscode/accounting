import React, { ReactElement } from 'react';
import IconButton from './IconButton';

type Section = {
    id: string,
    icon: ReactElement<any, any>,
    title: string,
}

interface pageProps {
    title:string,
    items: Section[],
    footer: string,
}

const SideBar: React.FC<pageProps> = ({title, footer, items}) => {
  return (
    <>
    <div className='fixed h-full w-48 bg-gray-300  py-16'>
        <div className='h-full ml-10 flex flex-col justify-between'>
          <p className='flex font-bold text-3xl w-full justify-center'> {title} </p>
          <div className='flex flex-col w-full'>
              <IconButton title='hello'/>
              <IconButton title='hello'/>
              <IconButton title='hello'/>
          </div>
          <p className='flex font-bold text-3xl w-full justify-center'> {footer} </p>
        </div>
    </div>
    </>
  );
};

export default SideBar;