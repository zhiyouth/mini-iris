export class MiniIrisError extends Error {
  constructor(msg: string) {
    msg = `MiniIris Error: ${msg}`;
    super(msg);
  }
}