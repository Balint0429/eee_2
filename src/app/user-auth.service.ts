import { Injectable } from '@angular/core';
import axios from 'axios';
import { RegistrationPayload, VerifyPayload, LoginPayload} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  login(data: any): Promise<any> {
    let payload = {
      email: data.email,
      password: data.password
    };

    return axios.post('http://172.16.16.157:8000/api/login', payload);
  }
 
  register(data: RegistrationPayload): Promise<any> {
    let payload = {
      felhasznalo_nev: data.userName,
      kereszt_nev: data.firstName,
      vezetek_nev: data.lastName,
      email: data.email,
      password: data.password,
    };

    return axios.post('http://172.16.16.157:8000/api/registration', payload);
  }

  verifyAccount(data: VerifyPayload): Promise<any> {
    let payload = {
        code: data.code,
    };

    return axios.put('http://172.16.16.157:8000/api/verify', payload);
  }
}