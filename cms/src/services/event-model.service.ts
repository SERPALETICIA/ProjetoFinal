import { API } from "../@libix/axios";
import { IEventModel } from "../@libix/types";


const _ENDPOINT = '/event-models';

const getAll = () => (API.get(_ENDPOINT));
const create = (data: IEventModel) => (API.post(_ENDPOINT, data));
const getById = (id: string) => (API.get(`${_ENDPOINT}/${id}`));
const update = (id: string, data: IEventModel) => (API.put(`${_ENDPOINT}/${id}`, data));
const remove = (id: string) => (API.delete(`${_ENDPOINT}/${id}`));

export const EventModelService = {
  getAll,
  create,
  getById,
  update,
  remove
}