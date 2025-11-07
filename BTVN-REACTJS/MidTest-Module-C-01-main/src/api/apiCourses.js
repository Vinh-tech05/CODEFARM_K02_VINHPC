import api from ".";

export const getCourses = async () => {
  const { data } = await api.get("/courses");
  return data;
};
export const createCourse = async (body) => {
  const { data } = await api.post(`/courses`, body);
  return data;
};

export const updateCourse = async (id, body) => {
  const { data } = await api.patch(`/courses/${id}`, body);
  return data;
};

export const removeCourse = async (id) => {
  const { data } = await api.delete(`/courses/${id}`);
  return data;
};
