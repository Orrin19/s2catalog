import "./App.scss";
import { FaGithub } from "react-icons/fa";

const App = () => {
  return (
    <>
      <main className="s2catalog">
        <h1>S.T.A.L.K.E.R. 2 Catalog</h1>
      </main>
      <footer className="footer">
        <p className="footer-text">
          S.T.A.L.K.E.R. 2 Catalog
          {new Date().getFullYear() == 2025
            ? " (2025"
            : " (2025–" + new Date().getFullYear()}
          {") | "}{" "}
          <a href="https://github.com/Orrin19/s2catalog" target="_blank">
            <FaGithub />
          </a>
        </p>
      </footer>
    </>
  );
};

export default App;
