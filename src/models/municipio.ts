// create table with id primary key and name string in typeorm
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import fm_Commerce from './commerce';
import fm_Estado from './estado';
import fm_Ciudad from './ciudad';
import fm_Parroquia from './parroquia';
import fm_Cod_postal from './cod_postal';

@Entity()
export default class fm_Location {
	@PrimaryGeneratedColumn()
	@Column({ length: 11 })
	id!: number;

	@Column({ length: 11 })
	@OneToOne((fm_Estado) => fm_Estado)
	id_estado!: fm_Estado | number;

	@Column()
	municipio!: string;
}
