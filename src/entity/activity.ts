// create table with id primary key and name string in typeorm
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class fm_Activity {
	@PrimaryGeneratedColumn()
	@Column({ length: 11 })
	id!: number;

	@Column()
	name!: string;
}
