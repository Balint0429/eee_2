import { Injectable } from '@angular/core';
import axios from 'axios';
import { RegistrationPayload, VerifyPayload, LoginPayload} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private baseURL: string = 'http://127.0.0.1:8000/api';

  constructor() { }

  setBaseURL(url: string) {
    this.baseURL = url;
  }

  login(data: any): Promise<any> {
    let payload = {
      email: data.email,
      password: data.password
    };

    return axios.post(this.baseURL + '/login', payload);
  }
 
  register(data: RegistrationPayload): Promise<any> {
    let payload = {
      felhasznalo_nev: data.userName,
      kereszt_nev: data.firstName,
      vezetek_nev: data.lastName,
      email: data.email,
      password: data.password,
    };

    return axios.post(this.baseURL + '/registration', payload);
  }

  verifyAccount(data: VerifyPayload): Promise<any> {
    let payload = {
        code: data.code,
    };

    return axios.put(this.baseURL + '/verify', payload);
  }
}
