// create table with id primary key and name string in typeorm
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class fm_Parroquia {
	@PrimaryGeneratedColumn()
	@Column({ length: 11 })
	id!: number;

	@Column({ length: 11 })
	id_municipio!: number;

	@Column({ length: 8 })
	parroquia!: string;
}
