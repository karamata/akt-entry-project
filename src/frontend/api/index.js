const APIFactory = ({ baseUrl }) => {
  const API = {
    get: async (endpoint, config) => {
      return await call(endpoint, 'GET', config);
    },

    post: async (endpoint, config) => {
      return await call(endpoint, 'POST', config);
    },

    put: async (endpoint, config) => {
      return await call(endpoint, 'PUT', config);
    },

    delete: async (endpoint, config) => {
      return await call(endpoint, 'DELETE', config);
    },
  };

  return API;

  function call(endpoint, method, config = {}) {
    return new Promise((resolve, reject) => {
      const url = makeUrl(endpoint);
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };
      if (config.data) {
        options.body = JSON.stringify(config.data);
      }

      fetch(url, options)
        .then(async response => {
          const type = 'json';
          const result = await response[type]();
          if (!response.ok) {
            throw result;
          }
          resolve(result);
        })
        .catch(error => reject(error));
    });
  }

  function makeUrl(endpoint) {
    const url = baseUrl + endpoint;
    return url;
  }
};

const ApiClient = APIFactory({ baseUrl: 'http://localhost:3000' });

export default ApiClient;
