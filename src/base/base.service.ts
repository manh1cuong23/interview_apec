import { Repository, DeepPartial, FindOneOptions } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class BaseService<T> {
    protected constructor(
        protected readonly repository: Repository<T>,
    ) {}

    async create(createDto: DeepPartial<T>): Promise<T> {
        try {
            const entity = this.repository.create(createDto);
            return await this.repository.save(entity);
        } catch (err) {
            console.log("err", err);
            throw err;
        }
    }

    async findAll(): Promise<T[]> {
        try {
            return await this.repository.find();
        } catch (err) {
            console.log("err", err);
            throw err;
        }
    }

    // async findOne(id: number): Promise<T | undefined> {
    //     try {
    //         return await this.repository.findOne({
    //             where:{
    //                 id:id
    //             }
    //         });
    //     } catch (err) {
    //         console.log("err", err);
    //         throw err;
    //     }
    // }

    // async update(id: number, updateDto: DeepPartial<T>): Promise<T> {
    //     try {
    //         const entity = await this.repository.findOne(id);
    //         if (!entity) {
    //             throw new Error(`Entity with id ${id} not found.`);
    //         }
    //         this.repository.merge(entity, updateDto);
    //         return await this.repository.save(entity);
    //     } catch (err) {
    //         console.log("err", err);
    //         throw err;
    //     }
    // }

    async remove(id: number): Promise<void> {
        try {
            await this.repository.delete(id);
        } catch (err) {
            console.log("err", err);
            throw err;
        }
    }
}
