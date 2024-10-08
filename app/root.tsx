import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import './tailwind.css';
import 'remixicon/fonts/remixicon.css';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='font-poppins'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className='bg-gradient-to-r from-dark to-secondary text-white leading-snug overflow-x-hidden w-screen'>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
