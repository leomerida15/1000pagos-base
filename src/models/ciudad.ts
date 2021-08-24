// create table with id primary key and name string in typeorm
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Activity {
	@PrimaryGeneratedColumn()
	@Column({ length: 11 })
	id!: number;

	@Column({ length: 11 })
	id_estado!: number;

	@Column()
	ciudad!: string;

	@Column()
	capital!: string;
}
