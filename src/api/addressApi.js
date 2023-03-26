import axios from "src/Axios.js";

export const getAddresses = async () => {
  const { data } = await axios.get(
    "https://api.lob.com/v1/addresses?limit=20",
    {
      headers: {
        Authorization: `Bearer ${process.env.LOB_SECRET}`,
      },
    }
  );

  return data.categories.items;
};
