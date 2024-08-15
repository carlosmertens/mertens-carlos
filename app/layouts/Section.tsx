interface Props {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: Props) {
  return (
    <section id={id}>
      <h2 className='tracking-wider uppercase text-3xl mb-4 text-center drop-shadow-header'>
        {title}
      </h2>
      <div className='flex flex-col items-center gap-y-8'>{children}</div>
    </section>
  );
}
