import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {AttendingRootComponent} from "./attending-root/attending-root.component";
import {AttendingDiscListComponent} from "./attending-disc-list/attending-disc-list.component";
import {AttendingAllComponent} from "./attending-all/attending-all.component";

const routes: Routes = [
  {
    path: "attending", component: AttendingRootComponent, children: [
      {path: "disc-list", component: AttendingDiscListComponent},
      {path: "disc-adm", component: AttendingAllComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendingRoutingModule { }
