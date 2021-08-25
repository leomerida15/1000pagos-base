// create table with id primary key and name string in typeorm
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import fm_Municipio from './municipio';

@Entity()
export default class fm_Parroquia {
	@PrimaryGeneratedColumn()
	@Column({ length: 11 })
	id!: number;

	@Column({ length: 11 })
	@OneToOne((fm_Municipio) => fm_Municipio)
	@JoinColumn()
	id_municipio!: fm_Municipio | number;

	@Column({ length: 8 })
	parroquia!: string;
}
