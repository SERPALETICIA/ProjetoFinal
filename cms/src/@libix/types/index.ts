export interface IEventType{

  id?: string,
  name: string 
}

export interface IEventFactory{

  id?: string,
  name: string 
}

export interface IEventModel{

  id?: string,
  name: string 
  factory: IEventFactory
}

export interface IEvent{

  id?: string,
  description : string;
  photo : string;
  eventDate : number;
  location : string;
  type : IEventType;
  model : IEventModel;
}

