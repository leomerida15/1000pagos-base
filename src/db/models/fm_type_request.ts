import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class fm_type_request {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column()
	name!: string;
}
