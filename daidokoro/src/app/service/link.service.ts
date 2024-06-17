import { Injectable } from '@angular/core';
import {Link} from "../model/link.model";
import {LINKS} from "../data/link.stub";

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor() { }

  getLinks() : Link[]{
    return LINKS;
  }
}
