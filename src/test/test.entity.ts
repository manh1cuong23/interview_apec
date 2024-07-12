import { BaseEntity } from "src/base/base.entity";
import { Column, Entity } from "typeorm";
@Entity({ name: "test" })
export class TestEntity extends BaseEntity{
    @Column()
    test:string;
}