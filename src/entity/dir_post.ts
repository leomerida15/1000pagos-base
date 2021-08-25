// create table with id primary key and name string in typeorm
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import fm_Commerce from './commerce';
import fm_Location from './location';

@Entity()
export default class fm_Dir_post {
	@PrimaryGeneratedColumn()
	@Column({ length: 11 })
	id!: number;

	@Column({ length: 11 })
	@OneToOne(() => fm_Location)
	@JoinColumn()
	id_location!: fm_Location | number;

	@Column({ length: 11 })
	@ManyToOne(() => fm_Commerce, (fm_Commerce) => fm_Commerce.dir_posts)
	@JoinColumn()
	id_commerce!: fm_Commerce | number;
}
