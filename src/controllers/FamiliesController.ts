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

      const [allFamilies, count] = await familiesRepository.findAndCount(
        {
          skip: (currentPage - 1) * itemsPerPage,
          take: itemsPerPage,

          select: {
            id: true,
            user_id: true,
            family_name:true,
          },
        }
      );
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
  // async getAllComplete(
  //   req: Request,
  //   res: Response
  // ): Promise<void | Response<any>> {
  //   try {
  //     const AppointmentRepository = AppDataSource.getRepository(Appointment);

  //     let { page, skip } = req.query;

  //     let currentPage = page ? +page : 1;
  //     let itemsPerPage = skip ? +skip : 10;

  //     const [allAppointments, count] = await AppointmentRepository.findAndCount(
  //       {
  //         skip: (currentPage - 1) * itemsPerPage,
  //         take: itemsPerPage,

  //         relations: {
  //           user: true,
  //           tattoo_artist: true,
  //         },

  //         select: {
  //           id: true,
  //           user_id: true,
  //           tattoo_artist_id: true,
  //           appointment_date: true,
  //           hour: true,
  //           schedules_id: true,
  //           user: {
  //             first_name: true,
  //             last_name: true,
  //           },
  //           tattoo_artist: {
  //             nickname: true,
  //           },
  //         },
  //       }
  //     );
  //     res.status(200).json({
  //       count,
  //       skip: itemsPerPage,
  //       page: currentPage,
  //       results: allAppointments,
  //     });
  //   } catch (error) {
  //     res.status(500).json({
  //       message: "Error while getting appointments",
  //     });
  //   }
  // }

  async getById(req: Request, res: Response): Promise<void | Response<any>> {
    try {
      const id = +req.params.id;
      const familiesRepository = AppDataSource.getRepository(Families);
      const families = await familiesRepository.findBy({
        user_id: id,
      });

      if (!families) {
        return res.status(404).json({
          message: "Families not found",
        });
      }

      res.status(200).json(families);
    } catch (error) {
      res.status(500).json({
        message: "Error while getting appointments",
      });
    }
  }

  // async getByArtist(
  //   req: Request,
  //   res: Response
  // ): Promise<void | Response<any>> {
  //   try {
  //     const id = +req.params.id;
  //     const appointmentRepository = AppDataSource.getRepository(Appointment);
  //     const [allAppointments, count] = await appointmentRepository.findAndCount(
  //       {
  //         // tattoo_artist_id: id,
  //         where: { tattoo_artist_id: id },

  //         relations: {
  //           user: true,
  //         },
  //         select: {
  //           tattoo_artist_id: true,
  //           id: true,
  //           appointment_date: true,
  //           hour: true,
  //           user: {
  //             first_name: true,
  //             last_name: true,
  //             phone: true,
  //           },
  //         },
  //       }
  //     );

  //     if (!allAppointments) {
  //       return res.status(404).json({
  //         message: "Appointment not found",
  //       });
  //     }

  //     res.status(200).json({
  //       count,
  //       results: allAppointments,
  //     });
  //   } catch (error) {
  //     res.status(500).json({
  //       message: "Error while getting appointments",
  //     });
  //   }
  // }
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
        message: "appointment create successfully",
      });
    } catch (error: any) {
      console.error("Error while creating Appointment:", error);
      res.status(500).json({
        message: "Error while creating Appointment",
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
