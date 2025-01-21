import "./App.scss";
import { FaGithub } from "react-icons/fa";
import Filter from "./components/Filter/Filter";
import CatalogService from "./services/CatalogService";

const App = () => {
  const catalogService = new CatalogService();

  return (
    <>
      <main className="s2catalog">
        <h1>S.T.A.L.K.E.R.&nbsp;2 Catalog</h1>
        <Filter catalogService={catalogService} />
      </main>
      <footer className="footer">
        <p className="footer-text">
          {"S.T.A.L.K.E.R. 2 Catalog | "}
          <a href="https://github.com/Orrin19/s2catalog" target="_blank">
            <FaGithub />
          </a>
        </p>
      </footer>
    </>
  );
};

export default App;
