import { BaseEntity } from "src/base/base.entity";
import { Column, Entity, OneToMany } from "typeorm";
@Entity({ name: "test" })
export class UserEntity extends BaseEntity{
    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column({ default: false })
    premium: boolean;

    @Column()
    avatar: string;

    @Column({ default: 1 })
    role: number;

    // @OneToMany(() => Comment, (comment) => comment.user)
    // comments: Comment[];

    // @OneToMany(() => SerivceList, (serviceList) => serviceList.user)
    // serviceList: SerivceList[];

    // @OneToMany(() => Transaction, (transaction) => transaction.userc)
    // transaction: Transaction[];
}