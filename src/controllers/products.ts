import { Request, Response } from 'express';

export const getProducts = (req: Request, res: Response) => {
	return res.send("getting orders");
}

