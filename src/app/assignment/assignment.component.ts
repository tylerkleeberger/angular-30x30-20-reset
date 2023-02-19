import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent {

  password = 'test';
  reveal = false;
  details = []

  displayDetails() {
    this.details.push(this.password);
    this.reveal = true;
  }

}
