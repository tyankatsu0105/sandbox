export interface IUser {
  greet: (name: string) => void
}

/**
 * This is some example documentation.
 * @public
 */
export class User implements IUser {
  constructor(private name: string){}

  /**
   * Print log that greeting message
   */
  greet() {
    console.log(`Hello ${this.name}-san :)`);
  }
}