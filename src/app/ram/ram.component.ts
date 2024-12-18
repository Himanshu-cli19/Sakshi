import { Component } from '@angular/core';
import { GolaComponent } from "../gola/gola.component";
import { HimanshuComponent } from "../himanshu/himanshu.component";

@Component({
  selector: 'app-ram',
  standalone: true,
  imports: [GolaComponent, HimanshuComponent],
  templateUrl: './ram.component.html',
  styleUrl: './ram.component.css'
})
export class RamComponent {

}
