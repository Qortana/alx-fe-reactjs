import axios from "axios";

export const fetchUserData = async (query, location, repos) => {
  let q = query;

  if (location) q += `+location:${location}`;
  if (repos) q += `+repos:>=${repos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${q}`
  );

  return response.data;
};
