import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import fm_photo from './fm_photo';

export default class fm_product {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column()
	name!: string;

	@Column()
	description!: string;

	@Column()
	price!: number;

	@Column()
	paym_method!: string;

	@OneToMany(() => fm_photo, (fm_photo) => fm_photo.id)
	photos!: fm_photo[];
}
