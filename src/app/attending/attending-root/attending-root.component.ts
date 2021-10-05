import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-attending-root',
  templateUrl: './attending-root.component.html',
  styleUrls: ['./attending-root.component.scss']
})
export class AttendingRootComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
