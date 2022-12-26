// Import Assets
import profile from "../assets/ian-profile.jpeg";

const Header = () => {
  return (
    <section className="header">
      <img src={profile} alt="John Doe" />

      <div className="header__content">
        <h1>Hi, I'm Ian Miller</h1>
        <p>Solidity Smart Contract Engineer</p>
        <button className="button">
          <a
            href="https://www.linkedin.com/in/ian-miller-620a63245/"
            target="_blank"
          >
            Get in touch
          </a>
        </button>
      </div>
    </section>
  );
};

export default Header;
