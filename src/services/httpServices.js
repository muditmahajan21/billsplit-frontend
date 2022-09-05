import instance from "../apis/instance";

const getService = async (url) => {
  const response = await instance.get(url);
  return response
};

const getServiceWithToken = async (url) => {
  const token = localStorage.getItem("token");
  const response = await instance.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

const postService = async (url, data) => {
    const response = await instance.post(url, data);
    return response
};

const postServiceWithToken = async (url, data) => {
  const token = localStorage.getItem("token");
  const response = await instance.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

const putService = async (url, data) => {
  const response = await instance.put(url, data);
  return response
};

const putServiceWithToken = async (url, data) => {
  const token = localStorage.getItem("token");
  const response = await instance.put(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

const deleteService = async (url) => {
  const response = await instance.delete(url);
  return response
};  

const deleteServiceWithToken = async (url) => {
  const token = localStorage.getItem("token");
  const response = await instance.delete(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export {
  getService,
  getServiceWithToken,
  postService,
  postServiceWithToken,
  putService,
  putServiceWithToken,
  deleteService,
  deleteServiceWithToken,
};