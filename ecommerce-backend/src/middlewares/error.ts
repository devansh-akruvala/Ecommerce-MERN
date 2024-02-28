import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/utility-class";
import { controllerType } from "../types/types.js";

export const errorMiddleware=(error:ErrorHandler,req:Request,res:Response,next:NextFunction)=>{
    
    const errMessage = error.message ||= "";
    const errStatusCode = error.statusCode ||= 500;
    
    return res.status(errStatusCode).json({
        success:false,
        message:errMessage,
    })
}

export const TryCatch = (func:controllerType)=> (req:Request,res:Response,next:NextFunction) => {
    return Promise.resolve(func(req,res,next)).catch(next);
}