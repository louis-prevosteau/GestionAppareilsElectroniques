import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-appareil',
  templateUrl: './create-appareil.component.html',
  styleUrls: ['./create-appareil.component.css']
})
export class CreateAppareilComponent implements OnInit {

  constructor(private appareilService: AppareilService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    const name = form.value['name'];
    const status = form.value['status'];
    this.appareilService.addAppareil(name, status);
    this.router.navigate(['appareils']);
  }

}
