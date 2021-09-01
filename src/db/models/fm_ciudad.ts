import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import fm_estado from './fm_estado';
import fm_municipio from './fm_municipio';

@Entity()
export default class fm_ciudad {
	@PrimaryGeneratedColumn()
	id?: number;

	@ManyToOne(() => fm_estado, (fm_estado) => fm_estado.ciudades)
	@JoinColumn({ name: 'id_estado' })
	id_estado!: number;

	@Column()
	ciudad!: string;

	@Column()
	cod_area!: string;

	@Column()
	cod_postal!: string;

	@CreateDateColumn()
	createdAt?: string;

	@UpdateDateColumn({ type: 'timestamp' })
	updatedAt?: number;
}
