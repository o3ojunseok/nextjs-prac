import React from 'react';
import Style from './Menu.module.css';
import Link from 'next/link';

export type MenuData = {
  title: string;
  link: string;
};

export default function Menu({ data }: { data: MenuData[] }) {
  return (
    <ul className={Style.menu}>
      {data.map((e) => (
        <li key={e.link}>
          <Link href={e.link}>
            <p>{e.title}</p>
          </Link>
       </li>
      ))}
    </ul>
  );
}
