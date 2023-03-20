import axios from "axios";

import { API_ROOT } from "../constants/constants";

export const boardApi = async (id: string) => {
  const request = await axios.get(`${API_ROOT}/boards/${id}`);
  return request.data;
};

export const updateBoardApi = async (id: string, data: any) => {
  const request = await axios.put(`${API_ROOT}/boards/${id}`, data);
  return request.data;
};

export const createColumnApi = async (data: any) => {
  const request = await axios.post(`${API_ROOT}/columns`, data);
  return request.data;
};

//edit or archive column
export const updateColumnApi = async (id: string, data: any) => {
  const request = await axios.put(`${API_ROOT}/columns/${id}`, data);
  return request.data;
};

export const createCardApi = async (data: any) => {
  const request = await axios.post(`${API_ROOT}/cards`, data);
  return request.data;
};

//edit or archive card
export const updateCardApi = async (id: string, data: any) => {
  const request = await axios.put(`${API_ROOT}/cards/${id}`, data);
  return request.data;
};
