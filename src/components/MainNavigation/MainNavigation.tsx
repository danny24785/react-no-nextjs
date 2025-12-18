import MainNavigationItem from './MainNavigationItem';
import { routes } from '../../routes';

function MainNavigation() {
  return (
    <div className='flex'>
      <ul className='flex gap-4'>
        <MainNavigationItem to={routes.home} label="Home" />
        <MainNavigationItem label="About">
          <ul className="absolute bg-gray-500 hidden group-hover:flex flex-col">
            <MainNavigationItem to={routes.about} label="Sub Page 1" />
            <MainNavigationItem to={routes.subPage2} label="Sub Page 2" />
            <MainNavigationItem to={routes.subPage3} label="Sub Page 3" />
          </ul>
        </MainNavigationItem>
        <MainNavigationItem to={routes.contact} label="Contact" />
      </ul>
    </div>
  );
}

export default MainNavigation;