import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class fm_worker {
	@PrimaryGeneratedColumn()
	@Column({ length: 11 })
	id!: number;

	@Column()
	name!: string;

	@Column()
	last_name!: string;

	@Column({ default: 2, length: 11 })
	id_roles!: number;

	@Column()
	password!: string;

	@Column({ length: 11 })
	id_ident_type!: number;

	@Column({ length: 11 })
	id_depart!: number;

	@Column()
	nro_ident!: string;

	@Column()
	email!: string;

	@Column()
	phone!: string;
}
