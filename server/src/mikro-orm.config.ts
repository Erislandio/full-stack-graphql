import { __prod__ } from './configs/constants';
import { MikroORM } from '@mikro-orm/core'
import { join as joinPath } from 'path';
import { Todo } from './entities/Todo';

export default {
    dbName: 'todos',
    entities: [Todo],
    user: 'eris',
    password: 'root',
    debug: !__prod__,
    type: 'postgresql',
    port: 5432,
    migrations: {
        path: joinPath(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    }
} as Parameters<typeof MikroORM.init>[0]