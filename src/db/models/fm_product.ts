import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
	ManyToOne,
	JoinColumn,
	OneToMany,
} from 'typeorm';
import fm_commerce from './fm_commerce';
import fm_payment_method from './fm_payment_method';
import fm_photo from './fm_photo';

@Entity()
export default class fm_product {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column()
	name!: string;

	@Column()
	description!: string;

	@Column()
	price!: number;

	@ManyToOne(() => fm_payment_method, (fm_payment_method) => fm_payment_method.id)
	@JoinColumn({ name: 'id_paym_method' })
	id_paym_method!: number;

	@OneToMany(() => fm_photo, (fm_photo) => fm_photo.id)
	photos?: fm_photo[];

	@CreateDateColumn()
	createdAt?: string;

	@UpdateDateColumn({ type: 'timestamp' })
	updatedAt?: number;
}
