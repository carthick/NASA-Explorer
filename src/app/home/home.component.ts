import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API_KEY } from './../../../config'
interface NasaApiResponse {
  url: string;
  title: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  secretKey: string;
  nasaApiResponse: NasaApiResponse;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.secretKey = API_KEY;
    this.http.get<NasaApiResponse>('https://api.nasa.gov/planetary/apod?api_key=API_KEY').subscribe(
      (response) => {
        this.nasaApiResponse = response;
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
