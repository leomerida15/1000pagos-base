import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class fm_department {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column()
	name!: string;
}
