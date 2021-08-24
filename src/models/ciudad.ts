// create table with id primary key and name string in typeorm
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import fm_Estado from './estado';
@Entity()
export default class fm_Ciudade {
	@PrimaryGeneratedColumn()
	@Column({ length: 11 })
	id!: number;

	@Column({ length: 11 })
	@ManyToOne(() => fm_Estado, (fm_Estado) => fm_Estado.ciudades)
	@JoinColumn()
	id_estado!: number;

	@Column()
	ciudad!: string;

	@Column()
	capital!: string;
}
