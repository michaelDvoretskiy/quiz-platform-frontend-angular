import { TestRoutingModule } from './test-routing.module';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {DiscListComponent} from "./disc-list/disc-list.component";
import {CommonModule} from "@angular/common";
import { TestListComponent } from './test-list/test-list.component';
import { TestOneComponent } from './test-one/test-one.component';
import { QuestionComponent } from './question/question.component';
import { TestRootComponent } from './test-root/test-root.component';
import {AuthModule} from "../auth/auth.module";

@NgModule({
  declarations: [DiscListComponent, TestListComponent, TestOneComponent, QuestionComponent, TestRootComponent],
  imports: [
    TestRoutingModule,
    FormsModule,
    CommonModule,
      AuthModule
  ]
})
export class TestModule { }
