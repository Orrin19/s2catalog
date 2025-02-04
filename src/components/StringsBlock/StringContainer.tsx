interface StringContainerProps {
  id: string;
  string: string;
}

const StringContainer = ({ id, string }: StringContainerProps) => {
  const parseMarkup = (inputString: string) => {
    if (!inputString) {
      return "";
    }

    inputString = inputString.replace(/\$J\d+L\d+/g, "");

    inputString = inputString.replace(/<([^>]+)>/g, (_match, tag) => {
      tag = tag.toLowerCase();
      switch (tag) {
        case "br":
          return "<br>";
        case "notebold":
        case "/notebold":
          return "'''";
        case "noteitalic":
        case "/noteitalic":
          return "''";
        case "noteunderline":
          return "<u>";
        case "/noteunderline":
          return "</u>";
        case "notestrike":
          return "<s>";
        case "/notestrike":
          return "</s>";
        case "notebody":
          return "<p>";
        case "/notebody":
          return "</p>";
        case "listitem":
          return "<li>";
        case "/listitem":
          return "</li>";
        default:
          return "";
      }
    });

    inputString = inputString.replace(/(<li>.*?<\/li>)/g, (listItems) => {
      if (!listItems.includes("<ul>")) {
        return `<ul>${listItems}</ul>`;
      } else {
        return listItems;
      }
    });

    return inputString;
  };

  return (
    <li className="string-container">
      <div className="string-container__id">{id}</div>
      <div
        className="string-container__string"
        dangerouslySetInnerHTML={{ __html: parseMarkup(string) }}
      ></div>
    </li>
  );
};

export default StringContainer;
