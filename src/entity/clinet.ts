import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class fm_clinet {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	name!: string;

	@Column()
	last_name!: string;

	@Column({ default: 1 })
	id_roles!: number;

	@Column()
	password!: string;

	@Column()
	id_ident_type!: number;

	@Column()
	nro_ident!: string;

	@Column()
	email!: string;
}
