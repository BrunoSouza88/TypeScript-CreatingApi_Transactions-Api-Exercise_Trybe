import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import { User } from '../../Types/User';
import db from './index';

export type UserInputtableFields = Optional<User, 'id'>;
// ou type UserWithOptionalId = {
//   id?: number,
//   email: string,
//   password: string,
//   name: string,
// };

type UserSequelizeModelCreator = ModelDefined<User, UserInputtableFields>;

export type UserSequelizeModel = Model<User, UserInputtableFields>; // tipo similar que será retornado e usado no service

const UserModel: UserSequelizeModelCreator = db.define('User', {
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  name: DataTypes.STRING, 
}, {
  tableName: 'users',
  timestamps: false,
  underscored: true,
});

export default UserModel;