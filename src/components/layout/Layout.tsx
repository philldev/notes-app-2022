import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return <div className='min-h-screen w-full bg-slate-100'>{children}</div>;
}
