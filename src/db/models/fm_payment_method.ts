import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class fm_payment_method {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column()
	name!: string;
}
