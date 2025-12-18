type ButtonProps = {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ label, icon, onClick }: ButtonProps) {
  return <button onClick={onClick} className="flex gap-2 items-center py-2 px-4 rounded-md border-1 border-transparent bg-gray-700 hover:cursor-pointer">{icon && icon}{label}</button>;
}