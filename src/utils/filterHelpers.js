export const hasActiveFilters = (filters) =>
  Object.values(filters).some((v) => v !== "");

export const emptyFilters = {
  country: "",
  topic: "",
  region: "",
  end_year: "",
  sector: "",
  pestle: "",
  source: "",
};
