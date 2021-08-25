import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import fm_activity from './fm_activity';
import fm_worker from './fm_worker';
import fm_clinet from './fm_client';
import fm_bank_commerce from './fm_bank_commerce';
import fm_dir_post from './fm_dir_post';
import fm_request from './fm_request';

@Entity()
export default class fm_commerce {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	name!: string;

	@Column()
	id_ident_type!: number;

	@Column()
	nro_ident!: string;

	@Column({ default: 0 })
	special_contributor!: number;

	@Column()
	@OneToOne(() => fm_activity)
	@JoinColumn()
	id_activity!: number;

	@Column()
	id_location!: number;

	@Column()
	@OneToOne(() => fm_worker)
	@JoinColumn()
	id_aci!: number;

	@Column()
	@OneToOne(() => fm_clinet)
	@JoinColumn()
	id_client!: number;

	@OneToMany(() => fm_bank_commerce, (fm_bank_commerce) => fm_bank_commerce.id_commerce)
	@JoinColumn()
	banks!: fm_bank_commerce[];

	@OneToMany(() => fm_dir_post, (fm_dir_post) => fm_dir_post.id_commerce)
	@JoinColumn()
	dir_posts!: fm_dir_post[];

	@OneToMany(() => fm_request, (fm_request) => fm_request.id_commerce)
	@JoinColumn()
	requests!: fm_request[];
}
