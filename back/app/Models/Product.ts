import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Category from './Category'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column()
  public name: string

  @column()
  public price: number
  @column()
  public category_id: number;

  @belongsTo(() => Category, {
    foreignKey: "category_id",
  })
  public category: BelongsTo<typeof Category>;

  @column()
  public cart_id: number

  @column()
  public description: string

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
