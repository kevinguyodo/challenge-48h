import { DateTime } from "luxon";
import {
  BaseModel,
  belongsTo,
  BelongsTo,
  column,
  hasMany,
  HasMany,
} from "@ioc:Adonis/Lucid/Orm";
import CompanyCategory from "./CompanyCategory";
import User from "./User";

export default class Company extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public user_id: number;

  @belongsTo(() => User, {
    foreignKey: "user_id",
  })
  public user: BelongsTo<typeof User>;

  @hasMany(() => CompanyCategory)
  public company_category: HasMany<typeof CompanyCategory>;

  @column()
  public name: string;

  @column()
  public email: string;

  @column()
  public phone_number: string;

  @column()
  public address: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
