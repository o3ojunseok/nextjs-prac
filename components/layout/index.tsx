import useNav from '@/hooks/useNav';
import React from 'react';
import Aside from '../aside';
import Body from '../body';
import Header from '../header';
import Styles from './Layout.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  const asideNavList = useNav();
  
  return (
    <div className={Styles.container}>
      <Header />

      <div className={Styles.asideContainer}>
        <div className={Styles.aside}>
          <Aside data = {asideNavList}></Aside>
        </div>
      </div>
      <div className={Styles.bodyContainer}>
        <Body>{children}</Body>
     </div>
    </div>
  );
}
