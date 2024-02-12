import GetData from "./GetData";

const service = {
  getData: async ({ from, to }) => {
    return new Promise(async (resolve, reject) => {
      const prodacts = await GetData();
      const data = prodacts.slice(from, to);

      resolve({
        count: prodacts.length,
        data: data,
      });
    });
  },
};

export default service;
