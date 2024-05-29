import Player from '../../domain/models/player'
import { sequelize } from '../sequelize'
import { DataTypes, Model, NOW } from 'sequelize'

export const dbPlayer = sequelize.define<Model<Player>>('player',{
  id: {type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
  name:{type: DataTypes.CHAR, defaultValue: 'Anonymous'},
  victories:{type: DataTypes.CHAR, defaultValue: 0},
  totalGames:{type: DataTypes.INTEGER, defaultValue: 0},
  registrationDate:{type: DataTypes.DATE, defaultValue: NOW}
},{tableName:'player'}) 
