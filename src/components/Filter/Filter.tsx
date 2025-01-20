import "./Filter.scss";
import { useState, useRef } from "react";
import {
  VscRegex,
  VscCaseSensitive,
  VscWholeWord,
  VscClose,
} from "react-icons/vsc";

const Filter = () => {
  const [useRegex, setUseRegex] = useState(false);
  const [useCase, setUseCase] = useState(false);
  const [useWholeWord, setUseWholeWord] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

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
