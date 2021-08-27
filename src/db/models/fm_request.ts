import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import fm_Client from './fm_client';
import fm_way_pay from './fm_payment_method';
import fm_commerce from './fm_commerce';
import { fm_type_request } from './fm_type_request';
import fm_status_request from './fm_status_request';

@Entity()
export default class fm_request {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column()
	number_post!: number;

	@Column()
	rc_constitutive_act!: string;

	@Column()
	rc_property_document!: string;

	@Column()
	rc_service_document!: string;

	@Column()
	rc_special_contributor!: string;

	@Column()
	rc_ref_bank!: string;

	@Column()
	rc_ref_perso!: string;

	@Column()
	rc_account_number!: string;

	@Column()
	text_account_number!: string;

	@Column()
	rc_front_local!: string;

	@Column()
	rc_in_local!: string;

	@Column()
	rc_rif!: string;

	@Column()
	rc_ident_card!: string;

	@OneToOne(() => fm_way_pay)
	@JoinColumn()
	id_payment_method!: number;

	@ManyToOne(() => fm_Client, (fm_Client) => fm_Client.requests)
	@JoinColumn()
	id_client!: number;

	@ManyToOne(() => fm_commerce, (fm_commerce) => fm_commerce.requests)
	@JoinColumn()
	id_commerce!: number;

	@OneToOne(() => fm_type_request)
	@JoinColumn()
	id_type_request!: number;

	@OneToOne(() => fm_status_request)
	@JoinColumn()
	fm_status_request!: number;

	@CreateDateColumn()
	createdAt?: string;

	@UpdateDateColumn({ type: 'timestamp' })
	updatedAt?: number;
}
