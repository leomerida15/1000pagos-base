// create table with id primary key and name string in typeorm
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

import fm_location from './fm_location';
import fm_commerce from './fm_commerce';

@Entity()
export default class fm_dir_post {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	@OneToOne(() => fm_location)
	@JoinColumn()
	id_location!: number;

	@Column()
	@ManyToOne(() => fm_commerce, (fm_Commerce) => fm_Commerce.dir_posts)
	@JoinColumn()
	id_commerce!: number;
}
