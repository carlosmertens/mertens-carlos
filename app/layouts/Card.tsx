interface Props {
  title?: string;
  children: React.ReactNode;
}

export function Card({ title, children }: Props) {
  return (
    <div className='bg-glass shadow-2xl rounded-xl p-6 max-w-96 min-w-72 transition-all duration-300 ease-out'>
      {title && (
        <h3 className='text-center text-secondary capitalize'>{title}</h3>
      )}
      {children}
    </div>
  );
}
