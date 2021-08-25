// create table with id primary key and name string in typeorm
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import fm_parroquia from './parroquia';
@Entity()
export default class fm_Cod_postal {
	@PrimaryGeneratedColumn()
	@Column({ length: 11 })
	id!: number;

	@Column({ length: 11 })
	@OneToOne(() => fm_parroquia)
	@JoinColumn()
	id_parroquia!: fm_parroquia | number;

	@Column({ length: 8 })
	cod!: string;
}
