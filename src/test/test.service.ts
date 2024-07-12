import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base/base.service';
import { Repository } from 'typeorm';
import { TestEntity } from './test.entity';

@Injectable()
export class TestService extends BaseService<TestEntity> {
    constructor(
        @InjectRepository(TestEntity)
        repository: Repository<TestEntity>,
    ) {
        super(repository);
    }

    // Bổ sung các phương thức cụ thể cho YourEntityService nếu cần thiết
    async customMethod(): Promise<any> {
        // Implement custom logic here
    }
    async sigin(){
        return "ok";
    }
}
