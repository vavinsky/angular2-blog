import { Component, OnInit } from '@angular/core';

import { AlertService } from './../../services/alert.service';
import { Alert } from './../../models/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  message: Alert;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => { this.message = message; });
  }

  onClose() {
    this.message = null;
  }
}
