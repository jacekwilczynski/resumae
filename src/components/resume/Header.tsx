import * as React from 'react';
import Item from './header/Item';

export interface HeaderProps {
  caption: string;
  list?: string[];
}

const Header: React.SFC<HeaderProps> = ({ caption, list }) => (
  <div className="header">
    <div className="header__caption">{caption}</div>
    <div className="header__list">
      {list!.map(item => (
        <Item key={item} data={item} />
      ))}
    </div>
  </div>
);

Header.defaultProps = {
  list: []
};

export default Header;
