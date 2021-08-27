// create table with id primary key and name string in typeorm
import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	OneToMany,
	JoinColumn,
	UpdateDateColumn,
	CreateDateColumn,
} from 'typeorm';
import fm_ciudad from './fm_ciudad';

@Entity()
export default class fm_estado {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column()
	estado!: string;

	@Column()
	iso_3166!: number;

	@OneToMany(() => fm_ciudad, (fm_Ciudad) => fm_Ciudad.id_estado)
	@JoinColumn()
	ciudades!: fm_ciudad[];

	@CreateDateColumn()
	createdAt?: string;

	@UpdateDateColumn({ type: 'timestamp' })
	updatedAt?: number;
}
