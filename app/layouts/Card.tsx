interface Props {
  title?: string;
  children: React.ReactNode;
  isLink?: boolean;
}

export function Card({ title, children, isLink = false }: Props) {
  return (
    <div className='bg-glass shadow-2xl rounded-xl pt-5 pb-8 px-4 max-w-96 min-w-72 md:w-80 lg:w-96 transition-all duration-300 ease-out'>
      {title && (
        <h3 className='text-center text-lg md:text-xl text-secondary md:text-primary font-bold tracking-wider capitalize'>
          {title}
          {isLink && (
            <span>
              <i className='ri-external-link-fill ri-lg ml-2'></i>
            </span>
          )}
        </h3>
      )}
      {children}
    </div>
  );
}
