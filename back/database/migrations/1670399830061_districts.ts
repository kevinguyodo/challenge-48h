import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class District extends BaseSchema {
  protected tableName = "districts";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.integer("city_id").unsigned().references("cities.id").notNullable();
      table.timestamp("created_at").notNullable();
      table.timestamp("updated_at").nullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
