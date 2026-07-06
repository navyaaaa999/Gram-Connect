import axios from "axios";

const API = "https://gram-connect-rf72.onrender.com";
export const addComplaint = async (complaint) => {
  const response = await axios.post(`${API}/complaints`, complaint);
  return response.data;
};

export const getComplaints = async () => {
  const response = await axios.get(`${API}/complaints`);
  return response.data;
};

export const updateComplaintStatus = async (id, status) => {
  const response = await axios.put(`${API}/complaints/${id}`, { status });
  return response.data;
};

export const deleteComplaint = async (id) => {
  const response = await axios.delete(`${API}/complaints/${id}`);
  return response.data;
};