// create table with id primary key and name string in typeorm
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
@Entity()
export default class fm_cod_postal {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	id_parroquia!: number;

	@Column()
	cod!: string;
}
