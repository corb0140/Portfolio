type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="h-0.5 w-1/4 rounded-md bg-linear-to-r from-blue to-purple" />
    </div>
  );
}
