// create table with id primary key and name string in typeorm
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import fm_Activity from './activity';
import fm_Client from './clinet';
import fm_Worker from './worker';
import bankCommerce from './bank_commerce';

@Entity()
export default class fm_Commerce {
	@PrimaryGeneratedColumn()
	@Column({ length: 11 })
	id!: number;

	@Column()
	name!: string;

	@Column({ length: 11 })
	id_ident_type!: number;

	@Column()
	nro_ident!: string;

	@Column({ default: false })
	special_contributor!: boolean;

	@Column({ length: 11 })
	@OneToOne(() => fm_Activity)
	@JoinColumn()
	id_activity!: fm_Activity | number;

	@Column({ length: 11 })
	id_location!: number;

	@Column({ length: 11 })
	@OneToOne(() => fm_Worker)
	@JoinColumn()
	id_aci!: fm_Worker | number;

	@Column({ length: 11 })
	@OneToOne(() => fm_Client)
	@JoinColumn()
	id_client!: fm_Client | number;

	@Column({ length: 11 })
	@OneToMany(() => bankCommerce, (bankCommerce) => bankCommerce.id_commerce)
	@JoinColumn()
	banks!: bankCommerce[];

	@Column({ length: 11 })
	@OneToMany(() => bankCommerce, (bankCommerce) => bankCommerce.id_commerce)
	@JoinColumn()
	dir_posts!: bankCommerce[];
}
