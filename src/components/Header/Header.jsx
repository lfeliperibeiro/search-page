import React from 'react';

export function Header() {
  return (
    <header
      className={
        'bg-amber-100 py-3.5 px-10 flex items-center justify-between shadow-lg'
      }
    >
      <h1 className={'font-bold xl:text-2xl text-sm'}>Search Icons page</h1>
      <p className={'text-sm'}>by Felipe Ribeiro</p>
    </header>
  );
}
