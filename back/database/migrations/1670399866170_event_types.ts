import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class EventType extends BaseSchema {
  protected tableName = "event_types";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.integer("duration").notNullable();
      table.timestamp("created_at").notNullable();
      table.timestamp("updated_at").nullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
