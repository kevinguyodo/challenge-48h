import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Company from './Company';

export default class CompanyCategory extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;
  @hasMany(() => Company)
  public company: HasMany<typeof Company>;

  @column()
  public id_company: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
