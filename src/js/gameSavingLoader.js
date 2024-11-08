import GameSaving from "./gameSaving";
import read from "./reader";
import json from "./parser";


export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const value = await json(data); 
    const { id: savingId, created, userInfo: { id: userId, name: userName, level, points } } = JSON.parse(value);
    const currentGame = new GameSaving(savingId, created, userId, userName, level, points);
    return new Promise((resolve) => {
      resolve(currentGame);
    });
  }
}
