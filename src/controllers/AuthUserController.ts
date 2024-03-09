import { Request, Response } from "express";
import { CreateUserRequestBody, LoginUserRequestBody, UserTokenData } from "../types/types";
import { User } from "../models/User";
import { Families } from "../models/families";
import { AppDataSource } from "../database/data-source";
import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

export class AuthUserController {
  async register(
    req: Request<{}, {}, CreateUserRequestBody>,
    res: Response
  ): Promise<void | Response<any>> {
    const { first_name, last_name, password, email, birthday,roles_id,families_id } =
      req.body;

    const userRepository = AppDataSource.getRepository(User);
    
    try {
      const newUser: User = {
       
        families_id,
        first_name,
        last_name,
        email,
        birthday,
        roles_id,
        password: bcrypt.hashSync(password, 10),
      };

      await userRepository.save(newUser);

      res.status(StatusCodes.CREATED).json({
        message: "User created succesfully",
      });
    } 
    catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error while creating user",
      });
    }
  }
  async login(req: Request<{}, {}, LoginUserRequestBody>, res: Response): Promise<void | Response<any>> {
    
        const { password, email,} = req.body;
    
        const userRepository = AppDataSource.getRepository(User);
        try {
          if(!email || !password){
            return res.status(StatusCodes.BAD_REQUEST).json({
              message: "Email or password is required"
            });

          }
          const user = await userRepository.findOne({
            where: {
              email: email,
            },
            select:{
              id :true,
              password: true,
              roles_id:true,
            }
          });
          if(!user){
            return res.status(StatusCodes.BAD_REQUEST).json({
              message: "Bad email or password"
            });
          }
          const isPasswordValid = bcrypt.compareSync(password, user.password)
          
          if(!isPasswordValid){
            return res.status(StatusCodes.BAD_REQUEST).json({
              message: "Bad email or password"
            });
          }
          
          

         const tokenPayload: UserTokenData = {
            user_id: user.id?.toString() as string,
            role: user.roles_id,
            
         };

         const token = jwt.sign(tokenPayload, "123", {
            expiresIn: "3h",
         });

    
          res.status(StatusCodes.OK).json({
            message: "login succesfully",
            token
          });
        } catch (error) {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Error while login",
            
            
          });
        }
  }
}
