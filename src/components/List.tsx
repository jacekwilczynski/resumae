import * as React from 'react';

export interface ListProps {
  items: string[]
}

const List: React.SFC<ListProps> = ({ items }) => (
  <ul className="list">
    {items.map(item => (
      <li
        key={item}
        className="list__item"
        dangerouslySetInnerHTML={{
          __html: item.replace(
            /(https?:\/\/)([\w/.-_]+)/g,
            '<a href="$1$2" target="_blank" rel="noopener noreferrer">$2</a>'
          )
        }}
      />
    ))}
  </ul>
);

export default List;
