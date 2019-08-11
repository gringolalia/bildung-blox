import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navigieren',
  templateUrl: './navigieren.component.html',
  styleUrls: ['./navigieren.component.scss']
})
export class NavigierenComponent {
    open = false;
    drawerType = 'persistent';
    headerType = 'spacer';

    toggleDrawer() {
        this.open = !this.open;
    }

    get toolbarSpacer() { return this.headerType === 'spacer'; }
    get toolbarHeader() { return this.headerType === 'header'; }
}
