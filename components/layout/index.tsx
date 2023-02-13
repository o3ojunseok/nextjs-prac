import React from 'react';
import Header from '../header';
import Styles from './Layout.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className={Styles.container}>
      <Header />
    </div>
  );
}
