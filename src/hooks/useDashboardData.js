import API from "../api/api";

export const fetchAllData = async (page = 1, limit = 100) => {
  const response = await API.get(`/?page=${page}&limit=${limit}`);
  return response.data.data;
};

export const fetchFilteredData = async (filters, page = 1, limit = 100) => {
  const cleanFilters = {};

  Object.keys(filters).forEach((key) => {
    if (filters[key] !== "") {
      cleanFilters[key] = filters[key];
    }
  });

  cleanFilters.page = page;
  cleanFilters.limit = limit;

  const query = new URLSearchParams(cleanFilters).toString();

  const response = await API.get(`/filter?${query}`);

  return response.data.data;
};

// ======================================================
// DROPDOWN APIs
// ======================================================

export const fetchTopics = async () => {
  const response = await API.get("/topics");
  return response.data;
};

export const fetchRegions = async () => {
  const response = await API.get("/regions");
  return response.data;
};

export const fetchCountries = async () => {
  const response = await API.get("/countries");
  return response.data;
};

export const fetchSectors = async () => {
  const response = await API.get("/sectors");
  return response.data;
};

export const fetchSources = async () => {
  const response = await API.get("/sources");
  return response.data;
};

export const fetchPestles = async () => {
  const response = await API.get("/pestles");
  return response.data;
};

export const fetchEndYears = async () => {
  const response = await API.get("/end-years");
  return response.data;
};

// ======================================================
// ANALYTICS APIs
// ======================================================

export const fetchIntensityByCountry = async () => {
  const response = await API.get("/analytics/intensity-country");

  return response.data;
};

export const fetchTopicDistribution = async () => {
  const response = await API.get("/analytics/topic-distribution");

  return response.data;
};

export const fetchRegionDistribution = async () => {
  const response = await API.get("/analytics/region-distribution");

  return response.data;
};

export const fetchYearTrend = async () => {
  const response = await API.get("/analytics/year-trend");

  return response.data;
};
