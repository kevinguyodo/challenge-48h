import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  HasMany,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Event from "./Event";
import District from "./District";

export default class Place extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public latitude: string;

  @column()
  public longitude: string;

  @column()
  public road_name: string;

  @column()
  public district_id: number;

  @belongsTo(() => District, {
    foreignKey: "district_id",
  })
  public district: BelongsTo<typeof District>;

  @hasMany(() => Event)
  public myEvents: HasMany<typeof Event>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
