import { Field, InputType } from "type-graphql";

@InputType()
export class TodosResolverInput {

    @Field()
    limit: Number

    @Field()
    offset: Number
}

@InputType()
export class TodosResolverUpdateInput {

    @Field()
    id: Number

    @Field()
    finish: Boolean
}

@InputType()
export class TodoInput {

    @Field()
    title: String;

    @Field()
    description: String;
}

