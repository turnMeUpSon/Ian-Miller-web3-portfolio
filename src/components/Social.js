import cv from "../assets/Ian-Miller-CV-Web3.pdf";

const Social = () => {
  return (
    <div className="social">
      <h2>Socials</h2>

      <a href="" className="button">
        milleryan2003@gmail.com
      </a>

      <a href={cv} className="button" download target="_blank">
        <i class="fa fa-download"></i>Download my CV
      </a>

      <a
        href="https://www.linkedin.com/in/ian-miller-620a63245/"
        className="button"
        target="_blank"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/turnMeUpSon"
        className="button"
        target="_blank"
      >
        GitHub
      </a>
    </div>
  );
};

export default Social;
