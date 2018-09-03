import * as React from 'react';
import ResumaeText from '../../containers/ResumaeText';

export interface HeaderProps {
  caption: string;
  list?: string[];
}

const Header: React.SFC<HeaderProps> = ({ caption, list }) => (
  <div className="header">
    <div className="header__caption">{caption}</div>
    <div className="header__list">
      {list!.map(item => (
        <li key={item} className="header__list-item">
          <ResumaeText>{item}</ResumaeText>
        </li>
      ))}
    </div>
  </div>
);

Header.defaultProps = {
  list: []
};

export default Header;
