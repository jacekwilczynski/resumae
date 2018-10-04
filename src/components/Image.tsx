import * as React from 'react';

export interface ImageProps {
  src: string;
  alt?: string;
  href?: string;
}

const Image: React.SFC<ImageProps> = ({ src, alt, href }) => {
  const img = <img src={src} alt={alt} className="image" />;
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {img}
      </a>
    );
  }
  return img;
};

Image.defaultProps = {
  alt: ''
};

export default Image;
