import { Link } from 'react-router-dom';

type MainNavigationItemProps = {
  label: string;
  children?: React.ReactNode;
  to?: string;
  onClick?: () => void;
};

export default function MainNavigationItem({ label, children, to, onClick }: MainNavigationItemProps) {
  const MainNavStyles = 'flex py-2 px-4 text-gray-200 hover:text-white hover:cursor-pointer hover:bg-gray-900';

  return (
    <li className="group relative text-nowrap">
      {to 
        ? <Link to={to} className={MainNavStyles}>{label}</Link>
        : <a onClick={onClick} className={`${MainNavStyles} bg-transparent border-0`}>{label}</a>
      }
      {children}
    </li>
  );
}