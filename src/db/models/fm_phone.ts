import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import fm_clinet from './fm_client';

@Entity()
export default class fm_phone {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	@ManyToOne(() => fm_clinet, (fm_clinet) => fm_clinet.phones)
	@JoinColumn()
	id_client!: number;

	@Column()
	phone!: string;
}
