import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private collapse = false;

  constructor() { }

  setCollapse(collapseBol:boolean){
    this.collapse = collapseBol;
  }

  getCollapse(collapseBol:boolean){
    return this.collapse;
  }


}
