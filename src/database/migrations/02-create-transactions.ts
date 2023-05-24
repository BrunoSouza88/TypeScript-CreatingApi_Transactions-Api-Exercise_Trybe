import { DataTypes, Model, QueryInterface } from 'sequelize';

import { Transaction } from '../../Types/Transaction';

export default {
  up(queryInterface: QueryInterface){
    return queryInterface.createTable<Model<Transaction>>('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(30),
      },
      price: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2),
      },
      type: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      userId: {
        allowNull: false,
        field: 'user_id',
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        },
      }
    });
  },
  down(queryInterface: QueryInterface){
   return queryInterface.dropTable('transactions')
  },
};