import * as React from 'react';
import getHref from './getHref';

export interface ItemProps {
  data: string
}

const Item: React.SFC<ItemProps> = ({ data }) => {
  const href = getHref(data);
  return (
    <li className="header__list-item">
      {href ? <a href={href}>{data}</a> : data}
    </li>
  );
};

export default Item;
