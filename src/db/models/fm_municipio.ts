// create table with id primary key and name string in typeorm
import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	JoinColumn,
	OneToOne,
	OneToMany,
	UpdateDateColumn,
	CreateDateColumn,
} from 'typeorm';
import fm_estado from './fm_estado';
import fm_parroquia from './fm_parroquia';

@Entity()
export default class fm_municipio {
	@PrimaryGeneratedColumn()
	id?: number;

	@OneToOne(() => fm_estado)
	@JoinColumn({ name: 'id_estado' })
	id_estado!: number;

	@Column()
	municipio!: string;

	// relation OneToMany with fm_parroquia
	@OneToMany(() => fm_parroquia, (fm_parroquia) => fm_parroquia.id_municipio)
	@JoinColumn({ name: 'parroquia' })
	parroquia!: fm_parroquia[];

	@CreateDateColumn()
	createdAt?: string;

	@UpdateDateColumn({ type: 'timestamp' })
	updatedAt?: number;
}
