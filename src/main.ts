import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { HimanshuComponent } from './app/himanshu/himanshu.component';
import { GolaComponent } from './app/gola/gola.component';
import { RamComponent } from './app/ram/ram.component';

bootstrapApplication(RamComponent, appConfig)
  .catch((err) => console.error(err));
 
