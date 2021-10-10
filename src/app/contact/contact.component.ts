import { Component, OnInit } from '@angular/core';
import {Messeges } from "../messeges";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactName:string;
  contactEmail:string;
  contactMessage:string;
  published:Date;
  newMessage:any;

  messages: Messeges[] = [
    new Messeges (0, 'Roman Ali', 'romanalpha52@gmail.com', 'Welcome to the hood', new Date())
  ];

  submitMessage(){
      this.newMessage = new Messeges(
        0,
        this.contactName,
        this.contactEmail,
        this.contactMessage,
        new Date()
      );
      this.messages.push(this.newMessage);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
