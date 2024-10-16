import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Function to upload video and metadata
export const uploadVideo = async (formData) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/videos/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
};
export const updateProfile = async (formData) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/users/updateProfile`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
};

export const getVideos = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/users/getVideos`, data);
    return response.data;
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
}
export const getPosterVideos = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/users/getPosterVideos`, data);
    return response.data;
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
}

export const getUsers = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/users/getUsers`, data);
    return response.data;
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
}

export const getUserMessage = async () => {
  try {
    const response = await axios.post(`${API_URL}/api/users/getUserMessage`);
    return response.data;
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
}

export const searchVideos = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/videos/search`, data);
    return response.data;
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
}

export const createNews = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/admin/createNews`, data);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
}

export const getNews = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/admin/getNews`, data);
    return response.data;
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
}

export const getVideoWithUserId = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/admin/getVideoWithUserId`, data)
    return response.data;
  } catch (error) {
    console.log(error)
    throw error;
  }
}
export const getAllVideos = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/admin/getAllVideos`, data)
    return response.data;
  } catch (error) {
    console.log(error)
    throw error;
  }
}

export const updateVideo = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/admin/updateVideo`, data)
    return response.data;
  } catch (error) {
    console.log(error)
    throw error;
  }
}

export const getAllMessage = async () => {
  try {
    const response = await axios.post(`${API_URL}/api/admin/getAllMessage`)
    return response.data;
  } catch (error) {
    console.log(error)
    throw error;
  }
}

export const sendAnswerMessage = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/admin/sendMessages`, data)
    return response.data;
  } catch (error) {
    console.log(error)
    throw (error)
  }
}

export const deleteUserById = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/admin/deleteUserById`, data)
    return response.data;
  } catch (error) {
    console.log(error)
    throw (error)
  }
}
export const deleteVideoById = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/admin/deleteVideoById`, data)
    return response.data;
  } catch (error) {
    console.log(error)
    throw (error)
  }
}
export const sendAskMessage = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/users/sendAskMessage`, data)
    return response.data;
  } catch (error) {
    console.log(error)
    throw (error)
  }
}