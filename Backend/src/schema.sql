drop table if exists cars;

create table cars (
	id serial primary key unique,
  	placa text not null unique,
  	chassi text not null unique,
  	renavam integer not null unique,
  	modelo text not null,
    marca text not null,
    ano integer not null
);