import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { delay, of } from 'rxjs';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  validateUserNameDuplicate(value: string) {
    const existUsername = ['lelelolo113', 'lelelolo111'];
    const isDuplicate = existUsername.some((x) => x === value);
    return of(isDuplicate).pipe(delay(1000));
  }

  login(value: Login) {
    const isValidUser: Login = {
      username: 'admin',
      password: 'admin',
    };
    const today = new Date();
    const fakeJwtResponse = {
      idToken:
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJobGU3NjYiLCJhdXRoIjp7InByb2ZpbGUiOnsiaW5zdXJlcklkIjpudWxsLCJpbnN1cmVyTmFtZSI6bnVsbCwicGFzVHlwZSI6IklTIiwicGFzSWQiOiI2MDAwNDc4OSIsInJvbGUiOiJJUyIsImRvYlBvbGljeUhvbGRlciI6bnVsbCwiZWZmZWN0aXZlRGF0ZSI6bnVsbCwibnJpYyI6bnVsbCwidW5kZXJ3cml0aW5nTGV2ZWwiOm51bGwsInN1bUluc3VyZWQiOm51bGwsImNsaWVudElkIjpudWxsLCJpc0RlZmF1bHRQcm9maWxlIjoidHJ1ZSIsImFjY2Vzc0dyb3VwSWQiOm51bGwsImFjY2Vzc0dyb3VwRGVzIjpudWxsLCJtZXRob2RBdXRob3JpemUiOm51bGx9LCJhZ2VudE1hc3RlcnMiOltdfSwiaWF0IjoxNjY3MjA4NzA0LCJleHAiOjE2Njc1MDg3MDR9.84sUCmG1MPGO8YTbh2TFrvu0Frc8Lq_vGXAJ_AdcqI8',
      expiresIn: today.setMinutes(today.getMinutes() + 60),
    };
    let isLoginSuccess = false;
    if (value) {
      isLoginSuccess = true
        ? value.username === isValidUser.username &&
          value.password === isValidUser.password
        : false;
    }
    if (isLoginSuccess) {
      localStorage.setItem('id_token', fakeJwtResponse.idToken);
      localStorage.setItem('expires_at', fakeJwtResponse.expiresIn.toString());
    }
    return of(isLoginSuccess).pipe(delay(1000));
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  getExpiration() {
    let expiration = localStorage.getItem('expires_at') || '';
    let expiresAt = JSON.parse(expiration);
    return moment(Date.now()).isBefore(expiresAt);
  }
}
