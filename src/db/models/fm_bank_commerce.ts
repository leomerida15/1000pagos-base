// create table with id primary key and name string in typeorm
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { fm_bank } from './fm_bank';
import fm_commerce from './fm_commerce';

@Entity()
export default class fm_bank_commerce {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	@ManyToOne(() => fm_commerce, (fm_commerce) => fm_commerce.banks)
	id_commerce!: number;

	@Column()
	@ManyToOne(() => fm_bank, (fm_bank) => fm_bank.commerces)
	id_bank!: number;

	@Column()
	bank_account_num!: number;
}
