import * as React from 'react';
import TextWithCustomTags from 'containers/TextWithCustomTags';

export interface HeaderProps {
  caption: string;
  list?: string[];
  photo?: string;
}

const Header: React.SFC<HeaderProps> = ({ caption, list, photo }) => (
  <div className="header">
    <div className="header__column header__text">
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
    <div
      className="header__column header__photo"
      style={{ backgroundImage: `url(${photo})` }}
    />
  </div>
);

Header.defaultProps = {
  list: []
};

export default Header;
