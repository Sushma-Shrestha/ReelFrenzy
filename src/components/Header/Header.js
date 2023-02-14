import "./Header.css";

const Header = () => {
  return (
    <strong><span onClick={() => window.scroll(0, 0)} className="header">
      🎬 ReelFrenzy Hub 🎥
    </span></strong>
  );
};

export default Header;
