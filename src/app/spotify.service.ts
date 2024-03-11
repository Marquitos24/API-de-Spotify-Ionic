import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private readonly apiUrl = 'https://spotify23.p.rapidapi.com';

  constructor(private http: HttpClient) { }

  searchSongs(query: string) {
    const url = `${this.apiUrl}/search/?q=${encodeURIComponent(query)}&type=multi&offset=1&limit=30&numberOfTopResults=5`;
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '36c7f28caamshc2954bde752386fp124ea5jsncc77a83225a9',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    });

    return this.http.get(url, { headers });
  }
}
