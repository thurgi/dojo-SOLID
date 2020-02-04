import {Component, Input, OnInit} from '@angular/core';
import {ApplicationVar} from "../model/applicationVar";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() params: ApplicationVar[];
  constructor() { }

  ngOnInit() {
  }

}
