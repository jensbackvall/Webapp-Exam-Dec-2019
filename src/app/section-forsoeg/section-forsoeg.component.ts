import { Component } from '@angular/core';

import { Experiment } from '../experiment/experiment.model';

@Component({
  selector: 'app-section-forsoeg',
  templateUrl: './section-forsoeg.component.html'
  // styleUrls: ['./section-forsoeg.component.css']
})
export class SectionForsoegComponent {

  // For later experiments: Experiment

  experiments = [
    {
      ref: 'experiment1',
      title: 'Teaching Each Other Lab',
      imageurl: "url('assets/img/experiment1.jpg')"
    },
    {
      ref: 'experiment2',
      title: 'Random Performance Game',
      imageurl: "url('assets/img/Random-kost.jpg')"
    },
    {
      ref: 'experiment3',
      title: 'Total!Dans!',
      imageurl: "url('assets/img/experiment2.png')"
    },
    
  ]
}
