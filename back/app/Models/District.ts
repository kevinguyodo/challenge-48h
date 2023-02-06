import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  HasMany,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Place from "./Place";
import City from "./City";

export default class District extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public city_id: number;

  @belongsTo(() => City, {
    foreignKey: "city_id",
  })
  public city: BelongsTo<typeof City>;

  @hasMany(() => Place)
  public places: HasMany<typeof Place>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
