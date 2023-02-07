import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Role extends BaseSchema {
  protected tableName = 'roles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('nom').notNullable();
      table.timestamp("created_at").notNullable();
      table.timestamp("updated_at").nullable();
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
