import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Place extends BaseSchema {
  protected tableName = "places";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.string("latitude").notNullable();
      table.string("longitude").notNullable();
      table.string("road_name").notNullable();
      table.integer("district_id").unsigned().references("districts.id");
      table.timestamp("created_at").notNullable();
      table.timestamp("updated_at").nullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
