import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lich-chieu',
  templateUrl: './lich-chieu.component.html',
  styleUrls: ['./lich-chieu.component.scss'],
})
export class LichChieuComponent implements OnInit {
  @Input() DanhSachPhim;

  constructor() {}

  ngOnInit(): void {}
}
