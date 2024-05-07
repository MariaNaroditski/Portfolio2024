import { StyleImage } from "./Image.styles";

type ImageProps = {
  src: string;
  alt: string;
  $maxWidth?: string;
  $maxHeight?: string;
  $borderRadius?: string;
  $border?: string;
};

const Image = (props: ImageProps) => {
  const { src, alt, $maxWidth, $borderRadius, $border, $maxHeight } = props;

  return (
    <StyleImage
      src={src}
      alt={alt}
      $maxWidth={$maxWidth}
      $borderRadius={$borderRadius}
      $border={$border}
      $maxHeight={$maxHeight}
    />
  );
};

export default Image;
