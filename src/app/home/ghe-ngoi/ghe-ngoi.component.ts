import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ghe-ngoi',
  templateUrl: './ghe-ngoi.component.html',
  styleUrls: ['./ghe-ngoi.component.scss'],
})
export class GheNgoiComponent implements OnInit {
  @Input() itemGheNgoi;
  @Output() emitGhe = new EventEmitter();

  static: boolean = false;

  datGhe() {
    if (this.static) {
      this.static = false;
    } else {
      this.static = true;
    }

    this.emitGhe.emit(this.static);
  }
  constructor() {}

  ngOnInit(): void {}
}
