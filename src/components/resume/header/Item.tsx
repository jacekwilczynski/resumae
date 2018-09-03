import * as React from 'react';
import ResumaeText from 'containers/ResumaeText';

export interface ItemProps {
  data: string;
}

const Item: React.SFC<ItemProps> = ({ data }) => {
  return (
    <li className="header__list-item">
      <ResumaeText>{data}</ResumaeText>
    </li>
  );
};

export default Item;
