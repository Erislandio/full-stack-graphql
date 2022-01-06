import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { Field, ObjectType } from "type-graphql";

@Entity()
@ObjectType()
export class Todo {

    @PrimaryKey()
    @Field()
    id!: number;

    @Field()
    @Property({ type: 'text' })
    title: string;

    @Field()
    @Property({ type: 'text' })
    description: string;

    @Field()
    @Property({ type: 'boolean', default: false })
    done: boolean;

    @Field()
    @Property({ type: 'date', onCreate: () => new Date() })
    createdAt: Date = new Date();

    @Field()
    @Property({ type: 'date', onUpdate: () => new Date() })
    updatedAt: Date = new Date();
}