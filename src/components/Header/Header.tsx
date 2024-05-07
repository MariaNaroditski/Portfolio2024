import { constants, pageLinks } from "../../constants/constants";
import useDevice from "../../hooks/useDevice";
import {
  DoubleHr,
  HeaderContainer,
  Link,
  LinksContainer,
  HeaderInnerContainer,
  MenuButton,
  CloseButton,
} from "./Header.styles";

const { mariaLevy } = constants;

type HeaderProps = {
  openMenuPopup: boolean;
  handlePopupToggling: () => void;
};

const Header = (props: HeaderProps) => {
  const { openMenuPopup, handlePopupToggling } = props;

  const isSmallDevice = useDevice().tabletAndMobile;

  return (
    <HeaderContainer>
      <HeaderInnerContainer>
        <Link to="/" $isNameLink>
          {mariaLevy}
        </Link>
        {isSmallDevice ? (
          openMenuPopup ? (
            <CloseButton onClick={handlePopupToggling}>X</CloseButton>
          ) : (
            <MenuButton onClick={handlePopupToggling}>
              <i className="fa fas fa-bars" aria-hidden="true" />
            </MenuButton>
          )
        ) : (
          <LinksContainer>
            {pageLinks.map((link) => (
              <Link key={link.id} to={link.to}>
                {link.page}
              </Link>
            ))}
          </LinksContainer>
        )}
      </HeaderInnerContainer>
      <DoubleHr />
    </HeaderContainer>
  );
};

export default Header;
