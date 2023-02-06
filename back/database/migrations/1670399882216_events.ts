import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Event extends BaseSchema {
  protected tableName = "events";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.text("description").notNullable();
      table.integer("place_id").unsigned().references("places.id");
      table.integer("event_type_id").unsigned().references("event_types.id");
      table
        .integer("user_id")
        .unsigned()
        .references("users.id")
        .onDelete("CASCADE");
      table.timestamp("created_at").notNullable();
      table.timestamp("updated_at").nullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
