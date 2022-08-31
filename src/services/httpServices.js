import instance from "../apis/instance";

const postService = async (url, data) => {
    const response = await instance.post(url, data);
    return response
};

export {
  postService
}