import React from 'react';

import { Img } from './styles';
import ImageLoader from 'containers/ImageLoader';

const Image = ({ src, absolute, alt, fill, onLoad, style }) => (
  <ImageLoader src={src}>
    {source => (
      <Img
        onLoad={onLoad}
        src={source}
        alt={alt}
        loaded={source}
        absolute={absolute}
        fill={fill}
        style={style}
      />
    )}
  </ImageLoader>
);

Image.defaultProps = {
  src: null,
  aspectRatio: 55.5,
  framed: false,
  absolute: false,
  alt: null,
  onLoad: null,
  fill: null,
  style: null,
};

export default Image;
