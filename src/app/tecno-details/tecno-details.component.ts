import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Nokia } from '../nokia';

@Component({
  selector: 'app-tecno-details',
  templateUrl: './tecno-details.component.html',
  styleUrls: ['./tecno-details.component.css']
})
export class TecnoDetailsComponent implements OnInit {

  @Input() nokia:Nokia;
  @Output() deleteTecno = new EventEmitter<boolean>()

  removeArchive(remover:boolean) {
      this.deleteTecno.emit(remover)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
