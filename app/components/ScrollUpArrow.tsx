import { Link } from '@remix-run/react';

export function ScrollUpArrow() {
  return (
    <Link
      to='#'
      className='text-6xl fixed bottom-0 right-0 mr-2 mb-2 opacity-50'>
      <i className='ri-arrow-up-circle-fill ri-xs'></i>
    </Link>
  );
}
