import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, OneToOne } from 'typeorm';
import fm_ident_type from './fm_ident_type';
import fm_phone from './fm_phone';
import fm_request from './fm_request';
import fm_roles from './fm_roles';

@Entity()
export default class fm_clinet {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	name!: string;

	@Column()
	last_name!: string;

	@Column({ default: 1 })
	@OneToOne(() => fm_roles)
	id_roles!: number;

	@Column()
	password!: string;

	@Column()
	@OneToOne(() => fm_ident_type)
	id_ident_type!: number;

	@Column()
	nro_ident!: string;

	@Column({ unique: true })
	email!: string;

	@OneToMany(() => fm_phone, (fm_phone) => fm_phone.id_client)
	@JoinColumn()
	phones!: fm_phone[];

	@OneToMany(() => fm_request, (fm_request) => fm_request.id_client)
	@JoinColumn()
	requests!: fm_request[];
}
