import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import fm_municipio from './fm_municipio';

@Entity()
export default class fm_parroquia {
	@PrimaryGeneratedColumn()
	id?: number;

	@ManyToOne(() => fm_municipio, (fm_municipio) => fm_municipio)
	@JoinColumn()
	id_municipio!: number;

	@Column()
	parroquia!: string;
}
