import { Request, Response } from "express";
import { Tasks } from "../models/tasks";
import { Families } from "../models/families";


import { AppDataSource } from "../database/data-source";
import { Controller } from "./Controller";
import {CreateTasksRequestBody} from "../types/types"

//----------------------------------------------------------------------

export class TasksController implements Controller {
  async getAll(req: Request, res: Response): Promise<void | Response<any>> {
    try {
      const tasksRepository = AppDataSource.getRepository(Tasks);

      let { page, skip } = req.query;

      let currentPage = page ? +page : 1;
      let itemsPerPage = skip ? +skip : 10;

      const [allSchedules, count] = await tasksRepository.findAndCount({
        skip: (currentPage - 1) * itemsPerPage,
        take: itemsPerPage,
        select: {
          id: true,
          users_id: true,
          task_date: true,
          status:true,
        },
      });
      res.status(200).json({
        count,
        skip: itemsPerPage,
        page: currentPage,
        results: allSchedules,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error while getting Schedules",
      });
    }
  }
  async getById(req: Request, res: Response): Promise<void | Response<any>> {
    try {
      const id = +req.params.id;
      const tasksRepository = AppDataSource.getRepository(Tasks);
      const tasks = await tasksRepository.findBy({
        users_id: id,
      });

      if (!tasks) {
        return res.status(404).json({
          message: "tasks not found",
        });
      }

      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({
        message: "Error while getting tasks",
      });
    }
  }


  async create(
    req: Request<{}, {}, CreateTasksRequestBody>,

    res: Response
  ): Promise<void | Response<any>> {
    try {
      const data = req.body;
      const tasksRepository = AppDataSource.getRepository(Tasks);
      const newtasks = await tasksRepository.save(data);
      res.status(201).json({
        newtasks,
        message: "tasks create successfully",
      });
    } catch (error: any) {
      console.error("Error while creating tasks:", error);
      res.status(500).json({
        message: "Error while creating tasks",
        error: error.message,
      });
    }
  }
  async update(req: Request, res: Response): Promise<void | Response<any>> {
    try {
      const id = +req.params.id;
      const data = req.body;

      const tasksRepository = AppDataSource.getRepository(Tasks);
      await tasksRepository.update({ id: id }, data);

      res.status(202).json({
        message: "tasks updated successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: "Error while updating tasks",
      });
    }
  }
  async delete(req: Request, res: Response): Promise<void | Response<any>> {
    try {
      const id = +req.params.id;

      const tasksRepository = AppDataSource.getRepository(Tasks);
      await tasksRepository.delete(id);

      res.status(200).json({
        message: "tasks deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: "Error while deleting tasks",
      });
    }
  }
}
