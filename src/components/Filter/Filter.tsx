import "./Filter.scss";
import { useState } from "react";
import { VscRegex, VscCaseSensitive, VscWholeWord } from "react-icons/vsc";

const Filter = () => {
  const [useRegex, setUseRegex] = useState(false);
  const [useCase, setUseCase] = useState(false);
  const [useWholeWord, setUseWholeWord] = useState(false);

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
      <input
        type="text"
        className="filter__input"
        placeholder="Начните ввводить текст"
      />
    </div>
  );
};

export default Filter;
