import { Component, OnInit } from '@angular/core';
import { Nokia } from '../nokia';

@Component({
  selector: 'app-tecno',
  templateUrl: './tecno.component.html',
  styleUrls: ['./tecno.component.css']
})
export class TecnoComponent implements OnInit {
  nokias:Nokia[]=[
    
    new Nokia('nokia project','interface App Creation', 'form ','02/01/2020'),
    new Nokia('sumsang project','home screen creation', 'font end ','23/06/2020'),
    new Nokia('LG project','full phone Creation', 'back end ','15/3/2021'),
  ]

  showDetails(index) {
     this.nokias[index].showtecnoDetails = !this.nokias[index].showtecnoDetails;
  }
  deleteThisTecno(deleteTecno, index) {
    if(deleteTecno) {
      this.nokias.splice[this.nokias,1];
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
