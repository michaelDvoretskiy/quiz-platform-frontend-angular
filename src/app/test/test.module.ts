import { TestRoutingModule } from './test-routing.module';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {DiscListComponent} from "./disc-list/disc-list.component";
import {CommonModule} from "@angular/common";
import { TestListComponent } from './test-list/test-list.component';
import { TestOneComponent } from './test-one/test-one.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [DiscListComponent, TestListComponent, TestOneComponent, QuestionComponent],
  imports: [
    TestRoutingModule,
    FormsModule,
    CommonModule
  ]
})
export class TestModule { }
