import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

export const schemaValidator = (schema: AnyZodObject) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse({
                body: req.body,
                query: req.query,
                params: req.params,
            })
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                return res.status(400).json(error.issues.map((issue) => ({
                    path: issue.path,
                    massage: issue.message, 
                }))
                );
            }
            return res.status(500).json({message: 'Internal server error'})

        }
    }
}