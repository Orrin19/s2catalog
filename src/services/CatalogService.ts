import ru from "../assets/current/ru.json";

export default class CatalogService {
  private catalog: object = ru;
  private currentFilter: string = "";
  private filteredCatalog: object = this.catalog;
  private isRegex: boolean = false;
  private isCase: boolean = false;
  private isWholeWord: boolean = false;

  public getCatalog() {
    return this.filteredCatalog;
  }

  public setRegex(value: boolean) {
    this.isRegex = value;
  }

  public setCase(value: boolean) {
    this.isCase = value;
  }

  public setWholeWord(value: boolean) {
    this.isWholeWord = value;
  }

  public setCurrentFilter(filter: string) {
    this.currentFilter = filter;

    const reg = new RegExp(this.currentFilter, this.isCase ? "" : "i");

    this.filteredCatalog = Object.fromEntries(
      Object.entries(this.catalog).filter(([key, value]) => {
        const isKeyMatch = this.isRegex
          ? reg.test(key)
          : this.isCase
          ? this.isWholeWord
            ? key.split(/\s+/).includes(this.currentFilter)
            : key.includes(this.currentFilter)
          : this.isWholeWord
          ? key
              .toLowerCase()
              .split(/\s+/)
              .includes(this.currentFilter.toLowerCase())
          : key.toLowerCase().includes(this.currentFilter.toLowerCase());
        const isValueMatch = this.isRegex
          ? reg.test(value)
          : this.isCase
          ? this.isWholeWord
            ? value.split(/\s+/).includes(this.currentFilter)
            : value.includes(this.currentFilter)
          : this.isWholeWord
          ? value
              .toLowerCase()
              .split(/\s+/)
              .includes(this.currentFilter.toLowerCase())
          : value.toLowerCase().includes(this.currentFilter.toLowerCase());

        return isKeyMatch || isValueMatch;
      })
    );
  }
}
