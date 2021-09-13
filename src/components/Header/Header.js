/** @format */

import './Header.css';

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      Prime Movies App
    </span>
  );
};

export default Header;
