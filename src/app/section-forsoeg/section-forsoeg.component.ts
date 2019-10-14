import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { SafePipe } from '../safe.pipe';

import { Experiment } from '../experiment/experiment.model';
import { ExperimentsService } from '../experiment/experiments.service';

@Component({
  selector: 'app-section-forsoeg',
  templateUrl: './section-forsoeg.component.html'
  // styleUrls: ['./section-forsoeg.component.css']
})
export class SectionForsoegComponent implements OnInit, OnDestroy {

  experiments: Experiment[] = [];
  private experimentsSub: Subscription;
  constructor(public experimentsService: ExperimentsService) {}

  ngOnInit() {
    this.experimentsService.getExperiments();
    this.experimentsService.getExperimentsUpdateListener()
      .subscribe((experiments: Experiment[]) => {
        experiments.sort((expA, expB) => (expA.year > expB.year) ? -1 : 1);
        console.log(experiments);
        this.experiments = experiments;
      });
  }

  ngOnDestroy() {
    this.experimentsSub.unsubscribe();
  }
}
