import 'reflect-metadata';
import { MikroORM } from '@mikro-orm/core';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import ormConfigs from './mikro-orm.config';
import { buildSchema } from "type-graphql";
import { HelloResolver } from './resolvers/hello';
import { TodoResolver } from './resolvers/todoResolver';

async function main() {

    const orm = await MikroORM.init(ormConfigs);
    await orm.getMigrator().up();

    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, TodoResolver],
            validate: false
        }),
        context: ({ req, res }) => ({
            orm: orm.em,
            req,
            res
        })
    });

    apolloServer.applyMiddleware({ app });

    app.listen(8000, () => {
        console.log('Server graphql running on port: 8000')
    });
}

main().catch(err => console.error(err))