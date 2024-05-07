import { SocialLink as StylesSocialLink } from "./SocialLink.styles";

type SocialLinkProps = {
  href: string;
  className: string;
  $fontSize?: string;
};

const SocialLink = (props: SocialLinkProps) => {
  const { href, className, $fontSize } = props;

  return (
    <StylesSocialLink
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      $fontSize={$fontSize}
    >
      <i className={className} aria-hidden="true" />
    </StylesSocialLink>
  );
};

export default SocialLink;
