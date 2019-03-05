import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pattern-selector',
  templateUrl: './pattern-selector.component.html',
  styleUrls: ['./pattern-selector.component.scss']
})
export class PatternSelectorComponent implements OnInit {

  @Input() name: string;
  @Input() options: string[];
  @Output() optionPicked = new EventEmitter();
  buttonSelected: string;

  constructor() { }

  ngOnInit() {
  }

  chooseOption(option: string) {
    this.optionPicked.emit({patternName: this.name, patternUsed: option});
    this.buttonSelected = option;
  }
}
