import "./App.scss";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Filter from "./components/Filter/Filter";
import StringsBlock from "./components/StringsBlock/StringsBlock";
import CatalogService from "./services/CatalogService";

const App = () => {
  const catalogService = new CatalogService();
  const [catalog, setCatalog] = useState(catalogService.getCatalog());
  const onCatalogUpdate = () => setCatalog(catalogService.getCatalog());

  return (
    <>
      <main className="s2catalog">
        <h1>S.T.A.L.K.E.R.&nbsp;2 Catalog</h1>
        <Filter
          catalogService={catalogService}
          onCatalogUpdate={onCatalogUpdate}
        />
        <StringsBlock catalog={catalog} />
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
