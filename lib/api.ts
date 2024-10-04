import axios from 'axios';

const API_URL =
  process.env.REACT_APP_API_URL || 'http://localhost:5000/api/videos';

// Function to upload video and metadata
export const uploadVideo = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
};
