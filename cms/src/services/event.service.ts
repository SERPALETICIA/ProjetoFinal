
import { API } from "../@libix/axios";
import { IEvent } from "../@libix/types";


const _ENDPOINT = '/events';

const getAll = () => (API.get(_ENDPOINT));
const create = (data: IEvent) => (API.post(_ENDPOINT, data));
const getById = (id: string) => (API.get(`${_ENDPOINT}/${id}`));
const update = (id: string, data: IEvent) => (API.put(`${_ENDPOINT}/${id}`, data));
const remove = (id: string) => (API.delete(`${_ENDPOINT}/${id}`));

export const EventService = {
  getAll,
  create,
  getById,
  update,
  remove
}