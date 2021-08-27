// create table with id primary key and name string in typeorm
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, OneToMany } from 'typeorm';
import fm_estado from './fm_estado';
import fm_parroquia from './fm_parroquia';

@Entity()
export default class fm_municipio {
	@PrimaryGeneratedColumn()
	id?: number;

	@OneToOne(() => fm_estado)
	@JoinColumn()
	id_estado!: number;

	@Column()
	municipio!: string;

	// relation OneToMany with fm_parroquia
	@OneToMany(() => fm_parroquia, (fm_parroquia) => fm_parroquia.id_municipio)
	@JoinColumn()
	parroquia!: fm_parroquia[];
}
