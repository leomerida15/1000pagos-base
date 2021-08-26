import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import fm_Client from './fm_client';

@Entity()
export default class fm_phone {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	@ManyToOne(() => fm_Client, (fm_Client) => fm_Client.phones)
	@JoinColumn()
	id_client!: number;

	@Column()
	phone!: string;
}