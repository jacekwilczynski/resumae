import * as React from 'react';
import TextWithCustomTags from 'containers/TextWithCustomTags';
import Photo, { PhotoProps } from './header/Photo';

export interface HeaderProps {
  name: string;
  contactInfo?: string[];
  photo?: PhotoProps;
}

const Header: React.SFC<HeaderProps> = ({ name, contactInfo, photo }) => (
  <div className="header">
    <div className="header__column header__text">
      <div className="header__caption">{name}</div>
      <div className="header__list">
        {Array.isArray(contactInfo) &&
          contactInfo.map(item => (
            <li key={item} className="header__list-item">
              <TextWithCustomTags>{item}</TextWithCustomTags>
            </li>
          ))}
      </div>
    </div>
    {photo && <Photo {...photo} />}
  </div>
);

Header.defaultProps = {
  contactInfo: []
};

export default Header;
