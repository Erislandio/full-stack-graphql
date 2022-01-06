import { Migration } from '@mikro-orm/migrations';

export class Migration20220106180834 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "todo" ("id" serial primary key, "title" text not null, "description" text not null, "done" bool not null default false, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
  }

}
