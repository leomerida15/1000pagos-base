import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class fm_roles {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	name!: string;
}
