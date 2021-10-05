import { AttendingRoutingModule } from './attending-routing.module';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AuthModule} from "../auth/auth.module";
import { AttendingRootComponent } from './attending-root/attending-root.component';
import { AttendingDiscListComponent } from './attending-disc-list/attending-disc-list.component';
import { AttendingAllComponent } from './attending-all/attending-all.component';
import { AttendingCurrentComponent } from './attending-current/attending-current.component';
import { AttendingCurrentAdminComponent } from './attending-current-admin/attending-current-admin.component';

@NgModule({
  declarations: [
    AttendingRootComponent,
    AttendingDiscListComponent,
    AttendingAllComponent,
    AttendingCurrentComponent,
    AttendingCurrentAdminComponent
  ],
  imports: [
    AttendingRoutingModule,
    FormsModule,
    CommonModule,
    AuthModule
  ]
})
export class AttendingModule { }
