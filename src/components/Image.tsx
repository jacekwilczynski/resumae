import * as React from 'react';

interface ImageContainerProps {
  href?: string;
  float?: boolean;
}

const ImageContainer: React.SFC<ImageContainerProps> = ({
  href,
  float,
  children
}) => {
  const className =
    'image__container' + (float ? ' image__container--float' : '');
  return href ? (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <div className={className}>{children}</div>
  );
};

export interface ImageProps {
  src: string;
  alt?: string;
  href?: string;
  float?: boolean;
}

const Image: React.SFC<ImageProps> = ({ src, alt, href, float }) => (
  <ImageContainer href={href} float={float}>
    <img src={src} alt={alt} className="image__img" />
  </ImageContainer>
);

Image.defaultProps = {
  alt: '',
  float: false
};

export default Image;
