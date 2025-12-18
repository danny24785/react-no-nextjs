import { useState } from 'react';
import MainNavigationItem from './MainNavigationItem';
import { routes } from '../../routes';

function MainNavigation() {
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);

  return (
    <div className='flex'>
      <ul className='flex gap-4'>
        <MainNavigationItem to={routes.home} label="Home" />
        <li>
          <MainNavigationItem onClick={() => setIsAboutMenuOpen(!isAboutMenuOpen)} label="About" />
          {isAboutMenuOpen && <ul className="">
            <MainNavigationItem to={routes.about} label="Sub Page 1" />
            <MainNavigationItem to={routes.subPage2} label="Sub Page 2" />
            <MainNavigationItem to={routes.subPage3} label="Sub Page 3" />
          </ul>}
        </li>
        <MainNavigationItem to={routes.contact} label="Contact" />
      </ul>
    </div>
  );
}

export default MainNavigation;