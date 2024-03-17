import { Request, Response } from "express";
import { Tasks } from "../models/tasks";
import { User } from "../models/User";
import { Families } from "../models/families";
import { AppDataSource } from "../database/data-source";
import { Controller } from "./Controller";
import { CreateFamiliesRequestBody } from "../types/types";

//----------------------------------------------------------------------

export class FamiliesController implements Controller {
  async getAll(req: Request, res: Response): Promise<void | Response<any>> {
    try {
      const familiesRepository = AppDataSource.getRepository(Families);

      let { page, skip } = req.query;

      let currentPage = page ? +page : 1;
      let itemsPerPage = skip ? +skip : 10;

      const [allFamilies, count] = await familiesRepository.findAndCount({
        skip: (currentPage - 1) * itemsPerPage,
        take: itemsPerPage,

        select: {
          id: true,

          family_name: true,
        },
      });
      res.status(200).json({
        count,
        skip: itemsPerPage,
        page: currentPage,
        results: allFamilies,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error while getting family",
      });
    }
  }
  async getById(req: Request, res: Response): Promise<void | Response<any>> {
    try {
      const id = +req.params.id;
      const familiesRepository = AppDataSource.getRepository(Families);
      const families = await familiesRepository.find({
        where: { id: id },

        relations: {
          user: true,
          tasks:true,
          
        },
        select: {
          family_name: true,
          user: {
            id:true,
            first_name: true,
            last_name: true,
            
          },
          tasks: {
            id:true,
            users_id:true,
            name_task:true,
            date:true,
            hour:true,
            status:true,
          },
        },
      });
    

      if (!families) {
        return res.status(404).json({
          message: "Families not found",
        });
      }
      const family = families[0];


      res.status(200).json(family);
    } catch (error) {
      res.status(500).json({
        message: "Error while getting families",
      });
    }
  }


  async create(
    req: Request<{}, {}, CreateFamiliesRequestBody>,

    res: Response
  ): Promise<void | Response<any>> {
    try {
      const data = req.body;
      const familiesRepository = AppDataSource.getRepository(Families);
      const newFamily = await familiesRepository.save(data);
      res.status(201).json({
        newFamily,
        message: "family create successfully",
      });
    } catch (error: any) {
      console.error("Error while creating family:", error);
      res.status(500).json({
        message: "Error while creating family",
        error: error.message,
      });
    }
  }
  async update(req: Request, res: Response): Promise<void | Response<any>> {
    try {
      const id = +req.params.id;
      const data = req.body;

      const familiesRepository = AppDataSource.getRepository(Families);
      await familiesRepository.update({ id: id }, data);

      res.status(202).json({
        message: "families updated successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: "Error while updating families",
      });
    }
  }
  async delete(req: Request, res: Response): Promise<void | Response<any>> {
    try {
      const id = +req.params.id;

      const familiesRepository = AppDataSource.getRepository(Families);
      await familiesRepository.delete(id);

      res.status(200).json({
        message: "families deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: "Error while deleting families",
      });
    }
  }
}
