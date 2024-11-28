import { API } from "../@libix/axios";
import { IEventFactory } from "../@libix/types";


const _ENDPOINT = '/event-factories';

const getAll = () => (API.get(_ENDPOINT));
const create = (data: IEventFactory) => (API.post(_ENDPOINT, data));
const getById = (id: string) => (API.get(`${_ENDPOINT}/${id}`));
const update = (id: string, data: IEventFactory) => (API.put(`${_ENDPOINT}/${id}`, data));
const remove = (id: string) => (API.delete(`${_ENDPOINT}/${id}`));

export const EventFactoryService = {
  getAll,
  create,
  getById,
  update,
  remove
}