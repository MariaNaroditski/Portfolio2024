import { pageLinks } from "../../constants/constants";
import { Link, MenuContainer } from "./Menu.styles";

const Menu = () => {
  return (
    <MenuContainer>
      {pageLinks.map((link) => (
        <Link key={link.id} to={link.to}>
          {link.page}
        </Link>
      ))}
    </MenuContainer>
  );
};

export default Menu;
