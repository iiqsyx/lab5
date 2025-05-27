declare namespace Express {
  interface Request {
    user?: { id: string; login: string };
  }
}