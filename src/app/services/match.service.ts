import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Feature } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(
    private http: HttpClient
  ) { }

  getFeatured() {
    return this.http.get<Feature>('https://api.vebo.xyz/api/match/featured').pipe(
      map((result) => {
        return result && result?.data ? result?.data : null;
      })
    );
  }

  getMatchByDay(day: string) {
    return this.http.get<Feature>(`https://api.vebo.xyz/api/match/fixture/${day}`).pipe(
      map((result) => {
        return result && result?.data ? result?.data : null;
      })
    );
  }

  getLatestNews() {
    return this.http.get<Feature>('https://api.vebo.xyz/api/news/vebotv/home').pipe(
      map((result) => {
        return result && result?.data ? result?.data : null;
      })
    );
  }

  getMatchLive() {
    return this.http.get<Feature>('https://live.vebo.xyz/api/match/live').pipe(
      map((result) => {
        return result && result?.data ? result?.data : null;
      })
    );
  }

  getNewsDetail(id: any) {
    return this.http.get<any>(`https://api.vebo.xyz/api/news/vebotv/detail/${id}`).pipe(
      map((result) => {
        return result || null;
      })
    );
  }

  getListsNews() {
    return this.http.get<any>(`https://api.vebo.xyz/api/news/vebotv/list/1`).pipe(
      map((result) => {
        return result || null;
      })
    );
  }

  getTournament(id: any) {
    return this.http.get<any>(`https://api.vebo.xyz/api/tournament/${id}`).pipe(
      map((result) => {
        return result || null;
      })
    );
  }
}
