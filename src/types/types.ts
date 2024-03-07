export interface CreateUserRequestBody {
 
  first_name: string;
  last_name: string;
  email: string;
  birthday?: Date;
  password: string;
  active?: Number;
  role: string;
  families_id:number;
}

export interface CreateArtistRequestBody {
  nickname: string;
  description?:string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;
  active?: Number;
}

export interface CreateFamiliesRequestBody {
  user_id: number;
  family_name: string
  
}

export interface LoginUserRequestBody {
  email: string;
  password: string;
}

export interface UserTokenData {
  user_id: string;
  role: string;
 
 
}
export interface ArtistTokenData {
  tattoo_artist_id: string;
  role: string;
 
}

