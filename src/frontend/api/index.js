const APIFactory = ({ baseUrl }) => {
  const API = {
    get: async (endpoint, config) => {
      const result = await call(endpoint, 'GET', config);
      return result;
    },

    post: async (endpoint, config) => {
      const result = await call(endpoint, 'POST', config);
      return result;
    },

    put: async (endpoint, config) => {
      const result = await call(endpoint, 'PUT', config);
      return result;
    },

    delete: async (endpoint, config) => {
      const result = await call(endpoint, 'DELETE', config);
      return result;
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
