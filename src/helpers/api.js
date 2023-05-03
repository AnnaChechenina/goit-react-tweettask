import axios from 'axios';

const api = axios.create({
  baseURL: 'https://64326157d0127730d2d158ef.mockapi.io/users',
});

export const fetchUsers = async (page = 1) => {
  try {
    const response = await api.get('/users', {
      params: {
        page,
        limit: 3,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchFollowers = async () => {
  try {
    const response = await api.get('/users', {
      params: {
        isFollowed: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchNonFollowers = async () => {
  try {
    const response = await api.get('/users', {
      params: {
        isFollowed: false,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const followUser = async (id, followers) => {
  try {
    await api.put(`/users/${id}`, {
      followers,
      isFollowed: true,
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const unFollowUser = async (id, followers) => {
  try {
    await api.put(`/users/${id}`, {
      followers,
      isFollowed: false,
    });
  } catch (error) {
    console.error(error.message);
  }
};
