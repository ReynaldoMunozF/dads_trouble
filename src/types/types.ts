export interface CreateUserRequestBody {
 
  first_name: string;
  last_name: string;
  email: string;
  birthday?: Date;
  password: string;
  active?: Number;
  role: string;
  families_id:number;
  roles_id:number;
}



export interface CreateFamiliesRequestBody {
  user_id: number;
  family_name: string
  
}
export interface CreateTasksRequestBody {
  familie_id: number;
  name_task: string;
  task_date: Date;
  hour: string;
  status: string;
  
}

export interface LoginUserRequestBody {
  email: string;
  password: string;
}

export interface UserTokenData {
  user_id: string;
  role: string;
  families_id: string;
  first_name:string;
 
 
}
export interface ArtistTokenData {
  tattoo_artist_id: string;
  role: string;
 
}

