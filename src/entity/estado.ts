// create table with id primary key and name string in typeorm
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import fm_Ciudad from './ciudad';
@Entity()
export default class fm_Estado {
	@PrimaryGeneratedColumn()
	@Column({ length: 11 })
	id!: number;

	@Column({ length: 11 })
	estado!: string;

	@Column({ length: 4 })
	iso_3166!: number;

	@OneToMany(() => fm_Ciudad, (fm_Ciudad) => fm_Ciudad.id_estado)
	@JoinColumn()
	ciudades!: fm_Ciudad[];
}
