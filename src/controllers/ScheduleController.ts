// import { Request, Response } from "express";
// import { Appointment } from "../models/tasks";
// import { Schedules } from "../models/shedules";

// import { AppDataSource } from "../database/data-source";
// import { Controller } from "./Controller";
// import { CreateAppointmentsRequestBody } from "../types/types";

// //----------------------------------------------------------------------

// export class ScheduleController implements Controller {
//   async getAll(req: Request, res: Response): Promise<void | Response<any>> {
//     try {
//       const SchedulesRepository = AppDataSource.getRepository(Schedules);

//       let { page, skip } = req.query;

//       let currentPage = page ? +page : 1;
//       let itemsPerPage = skip ? +skip : 10;

//       const [allSchedules, count] = await SchedulesRepository.findAndCount({
//         skip: (currentPage - 1) * itemsPerPage,
//         take: itemsPerPage,
//         select: {
//           id: true,
//           tattoo_artist_id: true,
//           appointment_date: true,
//         },
//       });
//       res.status(200).json({
//         count,
//         skip: itemsPerPage,
//         page: currentPage,
//         results: allSchedules,
//       });
//     } catch (error) {
//       res.status(500).json({
//         message: "Error while getting Schedules",
//       });
//     }
//   }
//   async getById(req: Request, res: Response): Promise<void | Response<any>> {
//     try {
//       const id = +req.params.id;
//       const SchedulesRepository = AppDataSource.getRepository(Schedules);
//       const schedules = await SchedulesRepository.findBy({
//         tattoo_artist_id: id,
//       });

//       if (!schedules) {
//         return res.status(404).json({
//           message: "Appointment not found",
//         });
//       }

//       res.status(200).json(schedules);
//     } catch (error) {
//       res.status(500).json({
//         message: "Error while getting appointments",
//       });
//     }
//   }

//   async getByArtist(
//     req: Request,
//     res: Response
//   ): Promise<void | Response<any>> {
//     try {
//       const id = +req.params.id;
//       const SchedulesRepository = AppDataSource.getRepository(Schedules);
//       const schedules = await SchedulesRepository.findBy({
//         tattoo_artist_id: id,
//       });

//       if (!schedules) {
//         return res.status(404).json({
//           message: "Schedules not found",
//         });
//       }

//       res.status(200).json(Schedules);
//     } catch (error) {
//       res.status(500).json({
//         message: "Error while getting Schedules",
//       });
//     }
//   }

//   async create(
//     req: Request<{}, {}, CreateAppointmentsRequestBody>,

//     res: Response
//   ): Promise<void | Response<any>> {
//     try {
//       const data = req.body;
//       const SchedulesRepository = AppDataSource.getRepository(Schedules);
//       const newSchedules = await SchedulesRepository.save(data);
//       res.status(201).json({
//         newSchedules,
//         message: "Schedules create successfully",
//       });
//     } catch (error: any) {
//       console.error("Error while creating Schedules:", error);
//       res.status(500).json({
//         message: "Error while creating Schedules",
//         error: error.message,
//       });
//     }
//   }
//   async update(req: Request, res: Response): Promise<void | Response<any>> {
//     try {
//       const id = +req.params.id;
//       const data = req.body;

//       const SchedulesRepository = AppDataSource.getRepository(Schedules);
//       await SchedulesRepository.update({ id: id }, data);

//       res.status(202).json({
//         message: "Schedules updated successfully",
//       });
//     } catch (error) {
//       res.status(500).json({
//         message: "Error while updating Schedules",
//       });
//     }
//   }
//   async delete(req: Request, res: Response): Promise<void | Response<any>> {
//     try {
//       const id = +req.params.id;

//       const SchedulesRepository = AppDataSource.getRepository(Schedules);
//       await SchedulesRepository.delete(id);

//       res.status(200).json({
//         message: "Schedules deleted successfully",
//       });
//     } catch (error) {
//       res.status(500).json({
//         message: "Error while deleting Schedules",
//       });
//     }
//   }
// }
