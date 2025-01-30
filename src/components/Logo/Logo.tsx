import logo from "../../assets/logo.png";
import slim from "../../assets/slim.svg";
import mom from "../../assets/mom.svg";

function Logo() {
  return (
    <a href="#" className="flex items-end gap-2">
      <img src={logo} width="70.25" height="66" />
      <img src={slim} className="ml-[-17px]" width="48.184" height="16.274" />
      <img src={mom} width="53.597" height="15.673" />
    </a>
  );
}

export default Logo;
