// create table with id primary key and name string in typeorm
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import fm_commerce from './commerce';
import fm_Bank from './bank';

@Entity()
export default class Activity {
	@PrimaryGeneratedColumn()
	@Column({ length: 11 })
	id!: number;

	@Column({ length: 11 })
	@ManyToOne(() => fm_commerce, (fm_commerce) => fm_commerce.banks)
	id_commerce!: fm_commerce;

	@Column({ length: 11 })
	@ManyToOne(() => fm_Bank, (fm_Bank) => fm_Bank.commerces)
	id_bank!: fm_Bank | number;

	@Column({ length: 20 })
	bank_account_num!: number;
}
