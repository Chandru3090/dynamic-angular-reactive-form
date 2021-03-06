import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './component/dialog-example/dialog-example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-form';
  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogExampleComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
