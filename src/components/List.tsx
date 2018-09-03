import * as React from 'react';

export interface ListProps {
  items: string[];
}

const List: React.SFC<ListProps> = ({ items }) => (
  <ul className="list">
    {items.map(item => (
      <li key={item} className="list__item">
        {item}
      </li>
    ))}
  </ul>
);

export default List;
