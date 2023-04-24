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
  
  nasaApiResponse: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    secretKey: string = API_KEY;
    this.http.get('https://api.nasa.gov/planetary/apod?api_key=' + this.secretKey).subscribe((res: any) => {
      this.nasaApiResponse = res.url;
    });
  }
}

