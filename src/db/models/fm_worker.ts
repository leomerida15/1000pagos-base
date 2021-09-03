import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	OneToOne,
	OneToMany,
	ManyToMany,
	JoinTable,
	Index,
	JoinColumn,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
} from 'typeorm';
import fm_ident_type from './fm_ident_type';
import fm_roles from './fm_roles';
import fm_department from './fm_department';
import fm_commerce from './fm_commerce';
import fm_company from './fm_company';

@Entity()
@Index(['id_ident_type', 'ident_num'], { unique: true })
export default class fm_worker {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column()
	name!: string;

	@Column()
	last_name!: string;

	@Column({ default: 2 })
	@ManyToMany(() => fm_roles)
	@JoinTable()
	id_roles!: number;

	@Column()
	password!: string;

	@ManyToOne(() => fm_ident_type)
	@JoinColumn({ name: 'id_ident_type' })
	id_ident_type!: number;

	@Column()
	ident_num!: string;

	@OneToMany(() => fm_company, (fm_company) => fm_company.workers)
	@JoinColumn({ name: 'id_company' })
	id_company!: number;

	@ManyToMany(() => fm_department)
	@JoinTable()
	id_depart!: number;

	@Column({ unique: true })
	email!: string;

	@Column()
	phone!: string;

	@CreateDateColumn()
	createdAt?: string;

	@UpdateDateColumn({ type: 'timestamp' })
	updatedAt?: number;
}
