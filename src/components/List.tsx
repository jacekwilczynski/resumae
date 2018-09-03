import * as React from 'react';
import ResumaeText from '../containers/ResumaeText';

export interface ListProps {
  items: string[];
}

const List: React.SFC<ListProps> = ({ items }) => (
  <ul className="list">
    {items.map(item => (
      <li key={item} className="list__item">
        <ResumaeText>{item}</ResumaeText>
      </li>
    ))}
  </ul>
);

export default List;
