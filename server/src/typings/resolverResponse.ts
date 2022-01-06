import { Todo } from "../entities/Todo";
import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class ResolverErros {

    @Field()
    field: String

    @Field()
    description: String;

}

@ObjectType()
export class RemoveResolverResponse {

    @Field(() => [ResolverErros], { nullable: true })
    erros?: [ResolverErros]

    @Field(() => Boolean, { nullable: true })
    removed?: Boolean
}

@ObjectType()
export class UpdateResolverResponse {

    @Field(() => [ResolverErros], { nullable: true })
    erros?: [ResolverErros]

    @Field(() => Boolean, { nullable: true })
    updated: Boolean;
}

@ObjectType()
export class FindTodoResolverResponse {

    @Field(() => [ResolverErros], { nullable: true })
    erros?: [ResolverErros]

    @Field(() => Todo, { nullable: true })
    todo?: Todo

}