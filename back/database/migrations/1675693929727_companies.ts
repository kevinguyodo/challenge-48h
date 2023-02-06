import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Company extends BaseSchema {
  protected tableName = "companies";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      // table.integer("user_id").unsigned().references("users.id").notNullable();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("phone_number").notNullable();
      table.string("address").notNullable();
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
