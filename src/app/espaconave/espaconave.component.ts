import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-espaconave',
  templateUrl: './espaconave.component.html',
  styleUrls: ['./espaconave.component.scss']
})
export class EspaconaveComponent {
  headerType = 'spacer';
    get toolbarSpacer() { return this.headerType === 'spacer'; }
    get toolbarHeader() { return this.headerType === 'header'; }
}

//
//   isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
//     .pipe(
//       map(result => result.matches)
//     );
//
//   constructor(private breakpointObserver: BreakpointObserver) {}
//
// }
