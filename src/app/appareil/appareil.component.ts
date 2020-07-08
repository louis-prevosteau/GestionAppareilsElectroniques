import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() name: string;
  @Input() status: string;
  @Input() index: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
  }

  onSwitch(){
    if (this.status === 'allumé'){
      this.appareilService.switchOffOne(this.index);
    } else if (this.status === 'éteint'){
      this.appareilService.switchOnOne(this.index);
    }
  }

}
