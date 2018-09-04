import * as React from 'react';
import TextWithCustomTags from 'containers/TextWithCustomTags';

export interface HeaderProps {
  caption: string;
  list?: string[];
}

const Header: React.SFC<HeaderProps> = ({ caption, list }) => (
  <div className="header">
    <div className="header__caption">{caption}</div>
    <div className="header__list">
      {Array.isArray(list) &&
        list.map(item => (
          <li key={item} className="header__list-item">
            <TextWithCustomTags>{item}</TextWithCustomTags>
          </li>
        ))}
    </div>
  </div>
);

Header.defaultProps = {
  list: []
};

export default Header;
