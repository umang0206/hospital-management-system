import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AdmindashComponent } from "./admindash/admindash.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hospitalManagementSystem';
}

