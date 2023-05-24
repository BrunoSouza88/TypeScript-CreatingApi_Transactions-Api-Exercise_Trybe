import { DataTypes, Model, QueryInterface } from 'sequelize';

import { User } from '../../Types/User';

export default {
  up(queryInterface: QueryInterface){
    return queryInterface.createTable<Model<User>>('users', { // <Model<User>> Faz referencia a um model de sequelize, usando tipe usuario. ou seja, estamos criando um modelo com o type que criamos anteriormente
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    })
  },
  down(queryInterface: QueryInterface){
    return queryInterface.dropTable('users');
  },
}