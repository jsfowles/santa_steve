// @flow
import React from 'react';
import { Img } from './styles';
import ImageLoader from '@containers/ImageLoader';

type Props = {
  src?: ?string,
  aspectRatio?: ?number,
  framed?: ?boolean,
  absolute?: ?boolean,
  fill?: ?boolean,
  alt?: ?string,
  onLoad?: ?() => void,
  style?: ?{},
};

const Image = ({ src, absolute, alt, fill, onLoad, style }: Props) => (
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
