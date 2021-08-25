import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class fm_activity {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	name!: string;
}
