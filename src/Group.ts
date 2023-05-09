import { GroupStats } from './Stats.js'
import { UniqueList } from './UniqueList.js'

/**
 * Class representing a group of users of the app.
 */
export class Group {
  /**
   * Unique id of the group.
   * @type {number}
   */
  public readonly id: number

  /**
   * Name of the group.
   * @type {string}
   */
  public name: string

  /**
   * List of users of the group.
   * @type {UniqueList}
   */
  public members: UniqueList = new UniqueList()

  /**
   * Stats of the group.
   * @type {GroupStats}
   */
  public stats: GroupStats = new GroupStats()

  /**
   * List of favorite tracks of the group.
   * @type {UniqueList}
   */
  public favorites: UniqueList = new UniqueList()

  /**
   * Initializes a new instance of the Group class.
   * @param id Id of the group.
   * @param name Name of the group.
   */
  public constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
}
