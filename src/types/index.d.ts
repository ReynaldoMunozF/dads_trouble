import { ArtistTokenData } from "./types";

declare global {
   namespace Express {
      export interface Request {
         tokenData: ArtistTokenData;
      }
   }
}