import { Model } from 'sequelize'
import Game from '../../domain/models/game'
import Player from '../../domain/models/player'
import { GameRepository } from '../../domain/repository/game.repository'

export class GameService{
  constructor(private readonly gameRepository: GameRepository){
    this.gameRepository = gameRepository
  }

  async createGamebyPlayerId(playerID: number): Promise<Model<Game>>{
    const game = this.gameRepository.createGamebyPlayerId(playerID)
    return game
  }

  async getGamesByPlayerId(playerID: number): Promise<Model<Game>[]>{
    const games = this.gameRepository.getGamesByPlayerId(playerID)
    return games
  }

  async deleteGamesbyId(playerID: number): Promise<Player>{
    const playerReset = this.gameRepository.deleteGamesbyId(playerID)
    return playerReset
    // Intencion de que devuelva el jugador con el numero de partidas en cero.
  }

}