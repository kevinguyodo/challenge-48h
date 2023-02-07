import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class User extends BaseSchema {
  protected tableName = "users";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table
        .integer("role_id")
        .unsigned()
        .references("roles.id")
        .notNullable();
      table.string("email").notNullable();
      table.string("nom").notNullable();
      table.string("prenom").notNullable();
      table.string("address").notNullable();
      table.string("password").notNullable();
      table.timestamp("created_at").notNullable();
      table.timestamp("updated_at").nullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
