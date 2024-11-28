import { API } from "../@libix/axios";
import { IEventType } from "../@libix/types";


const _ENDPOINT = '/event-types';

const getAll = () => (API.get(_ENDPOINT));
const create = (data: IEventType) => (API.post(_ENDPOINT, data));
const getById = (id: string) => (API.get(`${_ENDPOINT}/${id}`));
const update = (id: string, data: IEventType) => (API.put(`${_ENDPOINT}/${id}`, data));
const remove = (id: string) => (API.delete(`${_ENDPOINT}/${id}`));

export const EventTypeService = {
  getAll,
  create,
  getById,
  update,
  remove
}