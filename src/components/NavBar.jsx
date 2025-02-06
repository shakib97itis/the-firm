import logoImg from "../assets/logo.png";
import Button from "./utils/Button";

function NavBar() {
  const navItems = [
    { id: 1, name: "Home" },
    { id: 2, name: "Solutions" },
    { id: 3, name: "Cases" },
    { id: 4, name: "About Us" },
    { id: 5, name: "Blog" },
    { id: 6, name: "Contact Us" },
  ];
  return (
    <div id="nav" className="bg-white">
      <div className="container">
        <div className="flex items-center justify-between py-6">
          <div>
            <img src={logoImg} alt="Logo" />
          </div>
          <ul className="flex gap-3 text-lg font-semibold text-secondary">
            {navItems.map((item) => (
              <li
                className="relative z-0 cursor-pointer after:absolute after:bottom-0.5 after:left-0 after:-z-10 after:h-2 after:w-[85%] after:transition after:content-[''] hover:after:bg-primary"
                key={item.id}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <Button>Get In Touch</Button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
