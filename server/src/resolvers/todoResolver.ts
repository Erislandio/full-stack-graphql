import { Todo } from '../entities/Todo';
import { MyContext } from '../typings/myContext';
import { Resolver, Mutation, Arg, Ctx, Query } from 'type-graphql';
import { FindTodoResolverResponse, RemoveResolverResponse, UpdateResolverResponse } from '../typings/resolverResponse';
import { TodoInput, TodosResolverInput, TodosResolverUpdateInput } from '../typings/resolverInputs';

@Resolver()
export class TodoResolver {

    @Query(() => [Todo])
    async todos(
        @Ctx() { orm }: MyContext,
        @Arg('input') { limit, offset }: TodosResolverInput
    ) {
        const todos = orm.find(Todo, {}, { limit: Number(limit), offset: Number(offset) });
        return todos;
    }

    @Query(() => FindTodoResolverResponse)
    async todo(
        @Arg('id') id: Number,
        @Ctx() { orm }: MyContext
    ): Promise<FindTodoResolverResponse> {

        const todo = await orm.findOne(Todo, { id: Number(id) })

        if (!todo) {
            return {
                erros: [
                    {
                        field: 'id',
                        description: 'Todo not exists'
                    }
                ]

            }
        }

        console.log(todo);

        return {
            todo,
        }
    }

    @Mutation(() => Todo)
    async createTodo(
        @Arg("input") { description, title }: TodoInput,
        @Ctx() { orm }: MyContext
    ): Promise<Todo> {
        const todo = orm.create(Todo, {
            title,
            description
        })
        await orm.persistAndFlush(todo)
        return todo
    }

    @Mutation(() => RemoveResolverResponse)
    async removeTodo(
        @Arg('id') id: Number,
        @Ctx() { orm }: MyContext
    ): Promise<RemoveResolverResponse> {

        const todo = await orm.findOne(Todo, { id: Number(id) });

        if (!todo) {
            return {
                removed: false,
                erros: [
                    {
                        field: 'id',
                        description: 'Todo not exists'
                    }
                ]

            }
        }

        await orm.removeAndFlush(todo)

        return {
            removed: true,
        }
    }

    @Mutation(() => UpdateResolverResponse)
    async updateTodoStatus(
        @Arg('input') { finish, id }: TodosResolverUpdateInput,
        @Ctx() { orm }: MyContext
    ): Promise<UpdateResolverResponse> {

        const todo = await orm.findOne(Todo, { id: Number(id) });

        if (!todo) {
            return {
                updated: false,
                erros: [
                    {
                        field: 'id',
                        description: 'Todo not exists'
                    }
                ]
            }
        }

        todo.done = Boolean(finish);
        await orm.flush();

        return {
            updated: true
        }
    }
}