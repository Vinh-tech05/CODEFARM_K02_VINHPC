import api from ".";

export const getLessonsByCourse = async (courseId) => {
  const { data } = await api.get(`/lessons?courseId=${courseId}`);
  return data;
};

export const createLesson = async (body) => {
  const { data } = await api.post("/lessons", body);
  return data;
};

export const updateLesson = async (id, body) => {
  const { data } = await api.patch(`/lessons/${id}`, body);
  return data;
};

export const removeLesson = async (id) => {
  const { data } = await api.delete(`/lessons/${id}`);
  return data;
};
