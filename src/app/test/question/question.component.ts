import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnChanges {

  @Input() question: any;
  @Input("answers") givenAnswers: number[];
  @Input() editable: boolean = false;
  @Output("makeAnswer") makeAnswerEmitter: EventEmitter<number[]> = new EventEmitter<number[]>();

  answers: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.prepareAnswers();
  }

  ngOnChanges() {
    this.prepareAnswers();
  }

  private prepareAnswers() {
    this.answers = [];
    for(let aNumb in this.question.answers) {
      this.answers.push({
        number: this.question.answers[aNumb].id,
        name: this.question.answers[aNumb].name
      });
    }
  }

  makeAnswer(answer: number[]) {
    this.makeAnswerEmitter.emit(answer);
  }
}
