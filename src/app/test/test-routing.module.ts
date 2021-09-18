import {DiscListComponent} from "./disc-list/disc-list.component";
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {TestListComponent} from "./test-list/test-list.component";
import {TestOneComponent} from "./test-one/test-one.component";

const routes: Routes = [
  {path: "disc-list", component: DiscListComponent},
  {path: "test-list/:id", component: TestListComponent},
  {path: "test-one/:id", component: TestOneComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
