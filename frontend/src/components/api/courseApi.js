const BASE_URL = 'http://localhost:5000/api';

export const getAllCourses = async () => {
  const response = await fetch(`${BASE_URL}/course/all`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWJiZjA1ZDFmMzJhNWY3YzFjYWYyNDYiLCJpYXQiOjE3MDc3MTk0MjEsImV4cCI6MTcwNzc2MjYyMX0.Z-LNPzuXcA3RjZec-_0k-7DAqTGetGf-Eigx-88sFSY'
    // body: JSON.stringify(courseData),
}});
  const data = await response.json();
  return data;
};

export const createCourse = async (courseData) => {
  const response = await fetch(`${BASE_URL}/course/add`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWJiZjA1ZDFmMzJhNWY3YzFjYWYyNDYiLCJpYXQiOjE3MDc3MTk0MjEsImV4cCI6MTcwNzc2MjYyMX0.Z-LNPzuXcA3RjZec-_0k-7DAqTGetGf-Eigx-88sFSY'},
    body: JSON.stringify(courseData),
  });
  const data = await response.json();
  return data;
};

export const updateCourse = async (courseId, courseData) => {
  const response = await fetch(`${BASE_URL}/course/${courseId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(courseData),
  });
  const data = await response.json();
  return data;
};

export const deleteCourse = async (courseId) => {
  const response = await fetch(`${BASE_URL}/courses/${courseId}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
};
