import { DateTime } from "luxon";

import argon2, { hash } from 'argon2';
import Role from './Role';

import {
  BaseModel,
  belongsTo,
  BelongsTo,
  beforeSave,
  column
} from "@ioc:Adonis/Lucid/Orm";
<<<<<<< HEAD
import Hash from "@ioc:Adonis/Core/Hash";
=======
>>>>>>> back/user

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public role_id: number;

  @belongsTo(() => Role, {
    foreignKey: "role_id",
  })
  public role: BelongsTo<typeof Role>;

  @column()
  public email: string;

  @column()
  public nom: string;

  @column()
  public prenom: string;

  @column()
  public address: string;

  @column({ serializeAs: null })
  public password: string;

<<<<<<< HEAD
  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }

  @column()
  public phone_number: string;

  // @hasMany(() => Comment)
  // public comments: HasMany<typeof Comment>;

=======
>>>>>>> back/user
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await argon2.hash(user.password);
    }
  }
}
