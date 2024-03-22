import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav>
      <div classname="brand">
        <img
          src="https://st2.depositphotos.com/3867453/10635/v/450/depositphotos_106357766-stock-illustration-letter-t-logo-icon-design.jpg"
          width={100}
          alt="ecommerce-icon"
        />
      </div>

      <ul>
        <li>Auriculares</li>
        <li>Teclados</li>
        <li>Mouse</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
