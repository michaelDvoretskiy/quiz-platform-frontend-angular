import { AttendingRoutingModule } from './attending-routing.module';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AuthModule} from "../auth/auth.module";
import { AttendingRootComponent } from './attending-root/attending-root.component';
import { AttendingDiscListComponent } from './attending-disc-list/attending-disc-list.component';
import { AttendingDiscComponent } from './attending-disc/attending-disc.component';
import { AttendingCurrentComponent } from './attending-current/attending-current.component';

@NgModule({
  declarations: [
    AttendingRootComponent,
    AttendingDiscListComponent,
    AttendingDiscComponent,
    AttendingCurrentComponent
  ],
  imports: [
    AttendingRoutingModule,
    FormsModule,
    CommonModule,
    AuthModule
  ]
})
export class AttendingModule { }
