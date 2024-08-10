import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Carlos Mertens | Software Engineer' },
    {
      name: 'description',
      content:
        "I'm dedicated to harnessing the power of JavaScript to build innovative and impactful digital solutions.",
    },
  ];
};

export default function Index() {
  return (
    <div className='p-4 font-poppins'>
      <h1 className='text-white'>
        <span className='block uppercase font-bold italic text-5xl'>
          carlos mertens
        </span>
        <span>software engineer</span>
      </h1>
      <ul className='list-disc mt-4 pl-6 space-y-2'>
        <li>
          <a
            className='text-accent underline visited:text-purple-900'
            target='_blank'
            href='https://remix.run/start/quickstart'
            rel='noreferrer'>
            5m Quick Start
          </a>
        </li>
        <li>
          <a
            className='text-light underline visited:text-purple-900'
            target='_blank'
            href='https://remix.run/start/tutorial'
            rel='noreferrer'>
            30m Tutorial
          </a>
        </li>
        <li>
          <a
            className='text-primary underline visited:text-purple-900'
            target='_blank'
            href='https://remix.run/docs'
            rel='noreferrer'>
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
