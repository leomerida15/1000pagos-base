import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import fm_municipio from './fm_municipio';

@Entity()
export default class fm_parroquia {
	@PrimaryGeneratedColumn()
	id?: number;

	@ManyToOne(() => fm_municipio, (fm_municipio) => fm_municipio.parroquias)
	@JoinColumn({ name: 'id_municipio' })
	id_municipio!: number;

	@Column()
	parroquia!: string;

	@CreateDateColumn()
	createdAt?: string;

	@UpdateDateColumn({ type: 'timestamp' })
	updatedAt?: number;
}
