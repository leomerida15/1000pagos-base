import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class fm_status_request {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	name!: string;
}
