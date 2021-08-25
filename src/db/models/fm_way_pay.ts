import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class fm_way_pay {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	name!: string;
}
