import * as React from 'react';

export interface PhotoProps {
  src: string;
  position?: string;
  href?: string;
}

const Photo: React.SFC<PhotoProps> = ({ src, position, href }) => (
  <a
    href={href}
    className="header__column header__photo"
    style={{
      backgroundImage: `url(${src})`,
      backgroundPosition: position
    }}
    target="_blank"
    rel="noopener noreferrer"
  />
);

Photo.defaultProps = {
  href: '#'
};

export default Photo;
