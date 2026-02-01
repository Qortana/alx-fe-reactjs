import axios from "axios";

export const fetchUserData = async (query, location, minRepos) => {
  let searchQuery = query;

  if (location) {
    searchQuery += `+location:${location}`;
  }

  if (minRepos) {
    searchQuery += `+repos:>=${minRepos}`;
  }

  const response = await axios.get(
    `https://api.github.com/search/users?q=${searchQuery}`
  );

  return response.data;
};
