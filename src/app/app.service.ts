import { Injectable } from '@angular/core';
 import { Card } from './interfaces/card.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const BASE_URL = 'https://api.magicthegathering.io';

@Injectable()
export class CardService {

  constructor( private http: HttpClient) { }

  getCards(page: number = 1): Observable<any> {
    return this.http.get<Card[]>(`${BASE_URL}/v1/cards?types=Creature&contain=imageUrl&pageSize=20&page=${page}`);
  }


}
