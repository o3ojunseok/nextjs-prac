import React from 'react';
import Menu, { MenuData } from '../menu';

export default function Aside({ data }: { data: MenuData[] }) {
  return (
    <aside>
      <Menu data={data} />
    </aside>
  );
}
