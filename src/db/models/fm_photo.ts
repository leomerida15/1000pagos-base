import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class fm_photo {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column()
	path!: string;

	@Column()
	link!: string;

	@Column()
	name!: string;
}
