import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NotificationDialogComponent } from '../modals/notifications/notification-dialog/notification-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  notifications = [
    { icon: 'update', message: 'Atualização 1.0.0' },
   ];

  constructor(private auth: AuthService, private dialog: MatDialog){}

  logout() {
    this.auth.logout();
  }

  openDialog(notification): void {
    const dialogRef = this.dialog.open(NotificationDialogComponent, {
      width: '500px',
      data: { notificationDetails: notification.details }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
}
