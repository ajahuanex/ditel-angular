import { Injectable } from '@angular/core';
import { Client } from 'appwrite';
@Injectable({
  providedIn: 'root'
})
export class AppwriteService {

  constructor() { }
  
  const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64d39df5dbdedc536dfc');
}
