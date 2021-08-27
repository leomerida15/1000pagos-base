import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import fm_estado from './fm_estado';

@Entity()
export default class fm_ciudad {
	@PrimaryGeneratedColumn()
	id?: number;

	@ManyToOne(() => fm_estado, (fm_estado) => fm_estado.ciudades)
	@JoinColumn()
	id_estado!: number;

	@Column()
	ciudad!: string;

	@Column()
	capital!: string;
}
