import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import fm_ident_type from './fm_ident_type';
import fm_roles from './fm_roles';
import fm_department from './fm_department';

@Entity()
export default class fm_worker {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	name!: string;

	@Column()
	last_name!: string;

	@Column({ default: 2 })
	@ManyToMany(() => fm_roles)
	@JoinTable()
	id_roles!: number;

	@Column()
	password!: string;

	@Column()
	@OneToOne(() => fm_ident_type)
	id_ident_type!: number;

	@Column()
	@ManyToMany(() => fm_department)
	@JoinTable()
	id_depart!: number;

	@Column()
	nro_ident!: string;

	@Column({ unique: true })
	email!: string;

	@Column()
	phone!: string;
}
