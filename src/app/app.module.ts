import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {
  MatSliderModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatButtonModule,
  MatTableModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CheckNumberDirective} from './directives/checkNumber.directive';
import {ColorPickerModule} from 'ngx-color-picker';
import {RgbComponent} from './components/rgb/rgb.component';
import {InfoCardComponent} from './components/info-card/info-card.component';
import {ButtonsSectionComponent} from './components/buttons-section/buttons-section.component';
import {TableSectionComponent} from './components/table-section/table-section.component';
import {NeuroNetService} from './services/neuro-net.service';

@NgModule({
  declarations: [
    AppComponent,
    CheckNumberDirective,
    RgbComponent,
    InfoCardComponent,
    ButtonsSectionComponent,
    TableSectionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    ColorPickerModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [NeuroNetService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
