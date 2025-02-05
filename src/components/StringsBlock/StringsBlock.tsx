import { useEffect, useState } from "react";
import "./StringsBlock.scss";
import StringContainer from "./StringContainer";

interface StringsBlockProps {
  catalog: { [key: string]: string };
}

const StringsBlock = ({ catalog }: StringsBlockProps) => {
  const [catalogLength, setCatalogLength] = useState(0);
  const [isEmpty, setIsEmpty] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const length = Object.keys(catalog).length;
    setCatalogLength(length);
    setIsEmpty(length === 0);
    setCurrentPage(1);
  }, [catalog]);

  const pages = Math.ceil(catalogLength / 100);
  const pagesArray = Array.from({ length: pages }, (_, i) => i + 1);

  const handlePageChange = (page: number) => setCurrentPage(page);

  const getAdaptivePages = (): number[] => {
    const start = Math.max(1, Math.min(currentPage - 3, pages - 4));
    const end = Math.min(pages, Math.max(currentPage + 3, 5));
    const adaptivePages = pagesArray.slice(start - 1, end);
    if (!adaptivePages.includes(1)) adaptivePages.unshift(1);
    if (!adaptivePages.includes(pages)) adaptivePages.push(pages);
    if (
      adaptivePages[1] - adaptivePages[0] > 1 &&
      adaptivePages[1] !== 2 &&
      adaptivePages[1] !== -1
    ) {
      adaptivePages.splice(1, 0, -1);
    }
    if (
      adaptivePages[adaptivePages.length - 1] -
        adaptivePages[adaptivePages.length - 2] >
        1 &&
      adaptivePages[adaptivePages.length - 2] !== -1
    ) {
      adaptivePages.splice(adaptivePages.length - 1, 0, -1);
    }
    return adaptivePages;
  };

  const displayRange = `${currentPage * 100 - 99}-${Math.min(
    currentPage * 100,
    catalogLength
  )}`;

  return (
    <div className="strings-block">
      <p className="empty-string">
        {isEmpty
          ? "Каталог пуст"
          : `Строки ${displayRange} из ${catalogLength}`}
      </p>
      <ul className="strings-block__list">
        {Object.entries(catalog)
          .slice(currentPage * 100 - 100, currentPage * 100)
          .map(([key, string]) => (
            <StringContainer
              key={key}
              id={key}
              string={string || "Пустая строка"}
            />
          ))}
      </ul>
      {!isEmpty && (
        <div className="pagination">
          {getAdaptivePages().map((page, index) =>
            page === -1 ? (
              <span key={`ellipsis-${index}`} className="pagination__dots">
                ...
              </span>
            ) : (
              <button
                key={page}
                className={`pagination__button ${
                  page === currentPage ? "pagination__button--active" : ""
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default StringsBlock;
