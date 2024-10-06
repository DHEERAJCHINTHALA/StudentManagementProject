import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DropdownsService {
  country = 'http://localhost:60272/api/Country/All';
  states = 'http://localhost:60272/api/States/All';
  constructor(private httpclient: HttpClient) {}
  AllCountrys() {
    return this.httpclient.get(this.country);
  }
  AllStates() {
    return this.httpclient.get(this.states);
  }
}
