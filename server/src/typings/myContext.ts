import { Connection, IDatabaseDriver, EntityManager } from "@mikro-orm/core";
import { Request, Response, Express } from 'express';

export type MyContext = {
    orm: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
    req: Request & { session: Express.Session };
    res: Response;
}
