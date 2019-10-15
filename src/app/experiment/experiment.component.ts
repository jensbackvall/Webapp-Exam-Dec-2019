import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { SafePipe } from '../safe.pipe';

import { Experiment } from './experiment.model';
import { ExperimentsService } from './experiments.service';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html'
})
export class ExperimentComponent implements OnInit, OnDestroy {

  experiments: Experiment[] = [];
  private experimentsSub: Subscription;
  constructor(public experimentsService: ExperimentsService) {}

  ngOnInit() {
    this.experimentsService.getExperiments();
    this.experimentsService.getExperimentsUpdateListener()
      .subscribe((experiments: Experiment[]) => {
        this.experiments = experiments;
      });
  }


  onDelete(experimentId: string) {
    this.experimentsService.deleteExperiment(experimentId);
  }


  ngOnDestroy() {
    this.experimentsSub.unsubscribe();
  }
}
