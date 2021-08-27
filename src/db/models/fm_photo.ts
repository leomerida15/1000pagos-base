import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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

	@CreateDateColumn()
	createdAt?: string;

	@UpdateDateColumn({ type: 'timestamp' })
	updatedAt?: number;
}
