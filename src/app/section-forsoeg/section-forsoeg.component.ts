import { Component } from '@angular/core';

@Component({
  selector: 'app-section-forsoeg',
  templateUrl: './section-forsoeg.component.html'
  // styleUrls: ['./section-forsoeg.component.css']
})
export class SectionForsoegComponent {

  experiments = [
    {
      ref: 'experiment1',
      title: 'Teaching Each Other Lab',
      imageurl: "url('assets/img/TeachingEachOther.jpg')"
    },
    {
      ref: 'experiment2',
      title: 'White is the New White',
      imageurl: "url('assets/img/TeachingEachOther.jpg')"
    },
    
  ]
}
