// types/types.ts
export interface Vaccine {
    _id: string;
    name: string;
    manufacturer: string;
    dosesRequired: number;
    ageGroup: string;
  }
  
  export interface Provider {
    _id: string;
    organization: string;
    contact: string;
    address: string;
  }
  
  export interface Vaccination {
    _id: string;
    vaccineId: Vaccine;
    providerId: Provider;
    doseNumber: number;
    dateAdministered: Date;
    notes: string;
    status: 'scheduled' | 'completed';
  }

  export interface IPatientVaccinationResponse {
      data: Vaccination[];
      statusCode:string;
      message:string;
      error: null
  }
  

export interface IPayload{
    data: any,
    statusCode: string,
    message: string,
    error: string | null
}