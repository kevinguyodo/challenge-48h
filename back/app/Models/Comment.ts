import { DateTime } from "luxon";
import { BaseModel, belongsTo, BelongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Event from "./Event";
import User from "./User";

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public content: string;

  @column()
  public event_id: number;

  @column()
  public author_id: number;

  @belongsTo(() => Event, {
    foreignKey: "event_id",
  })
  public event: BelongsTo<typeof Event>;

  @belongsTo(() => User, {
    foreignKey: "author_id",
  })
  public user: BelongsTo<typeof User>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
