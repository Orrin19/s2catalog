import "./Filter.scss";
import { useState, useRef, useEffect } from "react";
import {
  VscRegex,
  VscCaseSensitive,
  VscWholeWord,
  VscClose,
} from "react-icons/vsc";
import CatalogService from "../../services/CatalogService";

interface FilterProps {
  catalogService: CatalogService;
  onCatalogUpdate: () => void;
}

const Filter = ({ catalogService, onCatalogUpdate }: FilterProps) => {
  const [useRegex, setUseRegex] = useState(false);
  const [useCase, setUseCase] = useState(false);
  const [useWholeWord, setUseWholeWord] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    catalogService.setRegex(useRegex);
    catalogService.setCase(useCase);
    catalogService.setWholeWord(useWholeWord);
  }, [useRegex, useCase, useWholeWord, catalogService]);

  useEffect(() => {
    catalogService.setCurrentFilter(inputValue);
    onCatalogUpdate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, useRegex, useCase, useWholeWord]);

  const handleClearInput = () => {
    setInputValue("");
    inputRef.current?.focus();
  };

  return (
    <div className="filter">
      <button
        title="Использовать регулярное выражение"
        onClick={() => setUseRegex(!useRegex)}
        className={`filter__button ${useRegex ? "filter__button--active" : ""}`}
      >
        <VscRegex />
      </button>
      <button
        title="С учётом регистра"
        onClick={() => setUseCase(!useCase)}
        className={`filter__button ${useCase ? "filter__button--active" : ""}`}
      >
        <VscCaseSensitive />
      </button>
      <button
        title="Слово целиком"
        onClick={() => setUseWholeWord(!useWholeWord)}
        className={`filter__button ${
          useWholeWord ? "filter__button--active" : ""
        }`}
      >
        <VscWholeWord />
      </button>
      <div className="filter__input-container">
        <input
          ref={inputRef}
          autoFocus
          type="text"
          className="filter__input"
          placeholder="Начните вводить текст"
          spellCheck={false}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          title="Очистить поле"
          onClick={handleClearInput}
          className="filter__button filter__button--clear"
        >
          <VscClose />
        </button>
      </div>
    </div>
  );
};

export default Filter;
