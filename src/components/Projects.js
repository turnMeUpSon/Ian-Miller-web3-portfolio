// Import Assets
import uniswap from "../assets/uniswap.png";
import compound from "../assets/compound.png";
import hilo from "../assets/hilo.png";
import domain_nft_marketplace from "../assets/domain-nft-marketplace.png";
import hiloswap from "../assets/hiloswap.png";
import tlou from "../assets/tloutoken.jpg";
import dao from "../assets/dao.jpg";
import art from "../assets/ART.png";

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="projects__cards">
        <div className="projects__card">
          <h3>Domains NFT Marketplace</h3>
          <img src={domain_nft_marketplace} alt="Domain NFT Marketplace" />
          <p>
            <p>
              Domain NFT Marketplace is a service that allows people to buy
              domain names like "john.eth"
            </p>
            <p>
              ⚡ Technology Stack & Tools:
              <ul>
                <li> Solidity (Writing Smart Contracts & Tests)</li>
                <li>Javascript (React & Testing)</li>
                <li>Hardhat (Development Framework)</li>
                <li> Ethers.js (Blockchain Interaction)</li>
                <li> React.js (Frontend Framework)</li>
                <li>Openzeppelin (Smart contarcts library)</li>
              </ul>
            </p>
          </p>

          <a
            href="https://github.com/turnMeUpSon/domain-marketplace-nft-solidity.git"
            target="_blank"
            className="button"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>HiloSwap-Staking-Dapp</h3>
          <img src={hiloswap} />
          <p>
            <p>
              Build an ERC20 Token Staking App in Solidity | Full Stack
              Solidity, ReactJS & Hardhat
            </p>
            <p>
              ⚡ Technology Stack & Tools:
              <ul>
                <li>Solidity (Writing Smart Contracts & Tests)</li>
                <li>Javascript (React & Testing)</li>
                <li>Hardhat (Development Framework)</li>
                <li>Ethers.js (Blockchain Interaction)</li>
                <li>Openzeppelin (Smart contarcts library)</li>
                <li>React.js (Frontend Framework)</li>
              </ul>
            </p>
          </p>

          <a
            href="https://github.com/turnMeUpSon/HiloSwap-Staking-Dapp.git"
            target="_blank"
            className="button"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>Hilo Real Estate NFT marketplace </h3>
          <img src={hilo} alt="Hilo" />
          <p>
            <p>
              Hilo is a Real Estate NFT marketplace which allows people to buy
              real estate propery using Ethereum Blockchain
            </p>
            <p>
              ⚡ Technology Stack & Tools{" "}
              <ul>
                <li>Solidity (Writing Smart Contracts & Tests)</li>
                <li>Javascript (React & Testing)</li>
                <li>Hardhat (Development Framework)</li>
                <li>Ethers.js (Blockchain Interaction)</li>
                <li>Openzeppelin (Smart contarcts library)</li>
                <li>React.js (Frontend Framework)</li>
              </ul>
            </p>
          </p>

          <a
            href="https://github.com/turnMeUpSon/Hilo-Real-Estate-NFT.git"
            target="_blank"
            className="button"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>Archi(ART) - ERC20 token</h3>
          <img src={art} alt="Compound Landing Page" />
          <p>
            <p>
              Archi(ART) - ERC20 token that has deployed in Hardhat Network
              using Solidity and Javascript
            </p>
            <p>
              ⚡ Technology Stack & Tools:
              <ul>
                <li>Solidity (Writing Smart Contracts & Tests)</li>
                <li>Javascript (React & Testing)</li>
                <li>Hardhat (Development Framework)</li>
                <li>Ethers.js (Blockchain Interaction)</li>
                <li>Openzeppelin (Smart contarcts library)</li>
                <li>React.js (Frontend Framework)</li>
              </ul>
            </p>
          </p>

          <a
            href="https://github.com/turnMeUpSon/Archi-Token-Hardhat.git"
            target="_blank"
            className="button"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>
            ERC20 tokens of different types of characters of The Last Of Us game
          </h3>
          <img src={tlou} alt="Compound Landing Page" />
          <p>
            <p>
              I created smart contarcts that implemented ERC20 tokens of
              different types of characters of The Last Of Us game
            </p>
            <p>
              ⚡ Technology Stack & Tools:
              <ul>
                <li>Solidity (Writing Smart Contracts & Tests)</li>
                <li>Javascript (React & Testing)</li>
                <li>Hardhat (Development Framework)</li>
                <li>Ethers.js (Blockchain Interaction)</li>
                <li>Openzeppelin (Smart contarcts library)</li>
              </ul>
            </p>
          </p>

          <a
            href="https://github.com/turnMeUpSon/ERC20-Tokens-TheLastOfUs.git"
            target="_blank"
            className="button"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>DAO</h3>
          <img src={dao} alt="Compound Landing Page" />
          <p>
            <p>
              I created DAO test project and made governance token using
              Solidity, TypeScripts, Hardhat
            </p>
            <p>
              ⚡ Technology Stack & Tools:
              <ul>
                <li>Solidity (Writing Smart Contracts & Tests)</li>
                <li>TypeScript (Testing)</li>
                <li>Hardhat (Development Framework)</li>
                <li>Ethers.js (Blockchain Interaction)</li>
                <li>Openzeppelin (Smart contarcts library)</li>
              </ul>
            </p>
          </p>

          <a
            href="https://github.com/turnMeUpSon/On-Chain-DAO-Solidity.git"
            target="_blank"
            className="button"
          >
            Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
