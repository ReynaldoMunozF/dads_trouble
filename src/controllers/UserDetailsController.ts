import { Controller } from "./Controller";
import { Request, Response } from "express";
import { User } from "../models/User";

import { AppDataSource } from "../database/data-source";
import { UserDetails } from "../models/UserDetails";

// -----------------------------------------------------------------------------

export class UserDetailsController implements Controller {
  async getAll(req: Request, res: Response): Promise<void | Response<any>> {
    try {
      const userDetailsRepository = AppDataSource.getRepository(UserDetails );
      let { page, skip } = req.query;

      let currentPage = page ? +page : 1;
      let itemsPerPage = skip ? +skip : 5;

      const [allUsers, count] = await userDetailsRepository.findAndCount({
        skip: (currentPage - 1) * itemsPerPage,
        take: itemsPerPage,

        select: {
          id: true,
          users_id: true,
          height: true,
          weight: true,
          shirt_size: true,
          pant_size: true,
          shoe_size: true,
          allergies: true,
        },
      });
      res.status(200).json({
        count,
        skip: itemsPerPage,
        page: currentPage,
        results: allUsers,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error while getting users",
      });
    }
  }

  async getById(req: Request, res: Response): Promise<void | Response<any>> {
    try {
      const userId = +req.params.id;

      const userDetailsRepository = AppDataSource.getRepository(UserDetails);
      const user = await userDetailsRepository.findOneBy({
        users_id: userId,
      });

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }
     

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({
        message: "Error while getting user",
      });
    }
  }

  async create(req: Request, res: Response): Promise<void | Response<any>> {
    try {
      const data = req.body;

      const userDetailsRepository = AppDataSource.getRepository(UserDetails);
      const newUser = await userDetailsRepository.save(data);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({
        message: "Error while creating userDetails",
      });
    }
  }

  async update(req: Request, res: Response): Promise<void | Response<any>> {
    try {
      const id = +req.params.id;
      const data = req.body;

      const userDetailsRepository = AppDataSource.getRepository(UserDetails);
      await userDetailsRepository.update({ id: id }, data);

      res.status(202).json({
        message: "User updated successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: "Error while updating user",
      });
    }
  }

  async delete(req: Request, res: Response): Promise<void | Response<any>> {
    try {
      const id = +req.params.id;

      const userDetailsRepository = AppDataSource.getRepository(UserDetails);
      await userDetailsRepository.delete(id);

      res.status(200).json({
        message: "User deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: "Error while deleting user",
      });
    }
  }
}
