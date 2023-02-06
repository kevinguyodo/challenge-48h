import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  hasMany,
  HasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Place from "./Place";
import EventType from "./EventType";
import User from "./User";
import Comment from "./Comment";

export default class Event extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public description: string;

  @column()
  public place_id: number;

  @column()
  public event_type_id: number;

  @column()
  public user_id: number;

  @belongsTo(() => Place, {
    foreignKey: "place_id",
  })
  public place: BelongsTo<typeof Place>;

  @belongsTo(() => EventType, {
    foreignKey: "event_type_id",
  })
  public event_type: BelongsTo<typeof EventType>;

  @belongsTo(() => User, {
    foreignKey: "user_id",
  })
  public user: BelongsTo<typeof User>;

  @hasMany(() => Comment)
  public comments: HasMany<typeof Comment>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
