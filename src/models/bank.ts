// create table with id primary key and name string in typeorm
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, getRepository } from 'typeorm';
import bankCommerce from './bank_commerce';

@Entity()
export default class fm_Bank {
	@PrimaryGeneratedColumn()
	@Column({ length: 11 })
	id!: number;

	@Column()
	code!: string;

	@Column()
	name!: string;

	@OneToMany(() => bankCommerce, (bankCommerce) => bankCommerce.id_commerce)
	@JoinColumn()
	commerces!: bankCommerce;
}
