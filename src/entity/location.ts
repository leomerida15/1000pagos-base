// create table with id primary key and name string in typeorm
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import fm_Commerce from './commerce';
import fm_Estado from './estado';
import fm_Ciudad from './ciudad';
import fm_Parroquia from './parroquia';
import fm_Cod_postal from './cod_postal';
import fm_Municipio from './municipio';

@Entity()
export default class fm_Location {
	@PrimaryGeneratedColumn()
	@Column({ length: 11 })
	id!: number;

	@Column({ length: 11 })
	@OneToOne((fm_Estado) => fm_Estado)
	@JoinColumn()
	id_estado!: fm_Estado | number;

	@Column({ length: 11 })
	@OneToOne((fm_Municipio) => fm_Municipio)
	@JoinColumn()
	id_municipio!: number;

	@Column({ length: 11 })
	@OneToOne((fm_Ciudad) => fm_Ciudad)
	@JoinColumn()
	id_ciudad!: fm_Ciudad | number;

	@Column({ length: 11 })
	@OneToOne((fm_Parroquia) => fm_Parroquia)
	@JoinColumn()
	id_parroquia!: fm_Parroquia | number;

	@Column({ length: 11 })
	@OneToOne((fm_Cod_postal) => fm_Cod_postal)
	@JoinColumn()
	id_cod_postal!: fm_Cod_postal | number;

	@Column({ length: 11 })
	sector!: string;

	@Column({ length: 11 })
	calle!: string;

	@Column({ length: 11 })
	local!: string;
}
