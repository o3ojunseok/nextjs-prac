import React from 'react';
import Styles from './Body.module.css';

export default function Body({ children }: { children: React.ReactNode }) {
  return <div className={Styles.body}>{children}</div>;
}