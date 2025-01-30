import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import navline from "../../assets/navline.svg";

function Header() {
  return (
    <header className="flex mb-36">
      <div className="flex items-baseline gap-5">
        <Logo />
        <img src={navline} />
        <Nav />
      </div>
    </header>
  );
}

export default Header;
