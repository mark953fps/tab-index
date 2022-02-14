import { Component, VERSION, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  tabIndex: number = 1;

  @HostListener('document: keydown', ['$event']) onKeyDown(e: any) {
    console.log(e, 'haha');
    let key = e.key;

    if (key === 'Tab') {
      this.tabIndex++;
      e.preventDefault();

      switch (this.tabIndex) {
        case 1:
          document.getElementById('tabindex1').focus();
          break;

        case 2:
          document.getElementById('tabindex2').focus();
          break;

        case 3:
          document.getElementById('tabindex3').focus();
          break;

        case 4:
          document.getElementById('tabindex4').focus();
          break;

        case 5:
          document.getElementById('tabindex5').focus();
          break;

        default:
          this.tabIndex = 1;
      }
    }
  }

  public ngOnInit() {}

  focusIndex(tabIndex: any) {
    this.tabIndex = tabIndex;
  }
}
