import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import fm_Client from './fm_client';
import fm_way_pay from './fm_way_pay';
import fm_commerce from './fm_commerce';
import fm_type_request from './fm_type_request';
import fm_status_request from './fm_status_request';

@Entity()
export default class fm_request {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	const_post!: number;

	@Column()
	fm_act!: string;

	@Column()
	fm_pro_doc!: string;

	@Column()
	fm_services!: string;

	@Column()
	fm_contributor!: string;

	@Column()
	fm_ref_bank!: string;

	@Column()
	fm_ref_perso!: string;

	@Column()
	fm_account!: string;

	@Column()
	fm_front_local!: string;

	@Column()
	fm_in_local!: string;

	@Column()
	fm_rif!: string;

	@Column()
	fm_ident_card!: string;

	@Column()
	@OneToOne(() => fm_way_pay)
	@JoinColumn()
	id_way_pay!: number;

	@Column()
	@ManyToOne(() => fm_Client, (fm_Client) => fm_Client.requests)
	@JoinColumn()
	id_client!: number;

	@Column()
	@ManyToOne(() => fm_commerce, (fm_commerce) => fm_commerce.requests)
	@JoinColumn()
	id_commerce!: number;

	@Column()
	@OneToOne(() => fm_type_request)
	@JoinColumn()
	id_type_request!: number;

	@Column()
	@OneToOne(() => fm_status_request)
	@JoinColumn()
	fm_status_request!: number;
}
