import { Link } from 'react-router-dom';

type MainNavigationItemProps = {
  label: string;
  to?: string;
  onClick?: () => void;
};

export default function MainNavigationItem({ label, to, onClick }: MainNavigationItemProps) {
  const MainNavStyles = 'flex py-2 px-4 text-gray-200 hover:text-gray-400 hover:cursor-pointer';

  return (
    <li>
      {to 
        ? <Link to={to} className={MainNavStyles}>{label}</Link>
        : <a onClick={onClick} className={`${MainNavStyles} bg-transparent border-0`}>{label}</a>
      }
    </li>
  );
}