// create table with id primary key and name string in typeorm
import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	OneToMany,
	JoinColumn,
	ManyToOne,
	OneToOne,
	UpdateDateColumn,
	CreateDateColumn,
} from 'typeorm';
import fm_estado from './fm_estado';
import fm_municipio from './fm_municipio';
import fm_ciudad from './fm_ciudad';
import fm_cod_postal from './fm_cod_postal';
import fm_parroquia from './fm_parroquia';

@Entity()
export default class fm_location {
	@PrimaryGeneratedColumn()
	id?: number;

	@OneToOne(() => fm_estado)
	@JoinColumn()
	id_estado!: number;

	@OneToOne(() => fm_municipio)
	@JoinColumn()
	id_municipio!: number;

	@OneToOne(() => fm_ciudad)
	@JoinColumn()
	id_ciudad!: number;

	@OneToOne(() => fm_parroquia)
	@JoinColumn()
	id_parroquia!: number;

	@OneToOne(() => fm_cod_postal)
	@JoinColumn()
	id_cod_postal!: number;

	@Column()
	sector!: string;

	@Column()
	calle!: string;

	@Column()
	local!: string;

	@CreateDateColumn()
	createdAt?: string;

	@UpdateDateColumn({ type: 'timestamp' })
	updatedAt?: number;
}
