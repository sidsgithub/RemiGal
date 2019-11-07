import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule} from '@angular/material/tabs';
import { MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     MatToolbarModule,
      MatExpansionModule, 
      MatInputModule,
      MatProgressBarModule,
      MatCardModule,
      MatIconModule,
      MatButtonModule,
      MatTabsModule,
      MatSidenavModule
  ],
  exports: [
    MatToolbarModule, 
    MatExpansionModule, 
    MatInputModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
