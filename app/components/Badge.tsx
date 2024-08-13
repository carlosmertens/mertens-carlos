type Props = {
  text: string;
};

export function Badge({ text }: Props) {
  return (
    <span className='bg-light rounded-xl text-dark font-bold text-xs py-2 px-2 uppercase whitespace-nowrap'>
      {text}
    </span>
  );
}
