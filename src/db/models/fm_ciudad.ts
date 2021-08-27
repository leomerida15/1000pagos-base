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
	capital!: string;

	@CreateDateColumn()
	createdAt?: string;

	@UpdateDateColumn({ type: 'timestamp' })
	updatedAt?: number;
}
