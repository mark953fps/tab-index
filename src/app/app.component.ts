import { Component, VERSION, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  @HostListener('document: keydown', ['$event']) onKeyDown(e: any) {
    console.log(e, 'haha');
    let key = e.key;

    if (key === 'Tab') {
      e.preventDefault();
      document.getElementById('tabindex4').focus();
    }
  }

  public ngOnInit() {}

  test() {
    console.log('hello')
  }
}