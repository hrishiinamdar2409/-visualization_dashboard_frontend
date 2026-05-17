import API from "../api/api";

export const fetchAllData = async () => {
  const response = await API.get("/");

  return response.data.data;
};


export const fetchFilteredData = async (filters) => {
  const cleanFilters = {};

  Object.keys(filters).forEach((key) => {
    if (filters[key] !== "") {
      cleanFilters[key] = filters[key];
    }
  });

  const query = new URLSearchParams(cleanFilters).toString();

  const response = await API.get(`/filter?${query}`);

  return response.data.data;
};



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
