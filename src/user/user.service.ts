import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base/base.service';
import { Repository } from 'typeorm';
import { UserEntity } from './User.entity';

@Injectable()
export class UserService extends BaseService<UserEntity> {
    constructor(
        @InjectRepository(UserEntity)
        repository: Repository<UserEntity>,
    ) {
        super(repository);
    }

    async sigin(){
        return "ok";
    }
    async signup(){
        return "ok";
    }
}
