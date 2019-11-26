import { Component, OnInit, OnDestroy } from '@angular/core';
import { Experiment } from '../experiment/experiment.model';
import { Subscription } from 'rxjs';
import { ExperimentsService } from '../experiment/experiments.service';

@Component({
  selector: 'app-section-about',
  templateUrl: './section-about.component.html'
  // styleUrls: ['./section-about.component.css']
})
export class SectionAboutComponent implements OnInit, OnDestroy {

  introtext =
    {
      introtitle: 'Software Testing',
      introtext: 'Software Testing Definition according to ANSI/IEEE 1059 standard – A process of analyzing a software item to detect the differences between existing and required conditions (i.e., defects) and to evaluate the features of the software item.'
    }

    experiments: Experiment[] = [];
    private experimentsSub: Subscription;
    constructor(public experimentsService: ExperimentsService) {}

    ngOnInit() {
      this.experimentsService.getExperiments();
      this.experimentsSub = this.experimentsService.getExperimentsUpdateListener()
        .subscribe((experiments: Experiment[]) => {
          experiments.sort((expA, expB) => (expA.year.substring(expA.year.length - 4) > expB.year.substring(expB.year.length - 4)) ? -1 : 1);
          // console.log(experiments);
          this.experiments = experiments;
        });
    }

    ngOnDestroy() {
      if (this.experimentsSub) {
        this.experimentsSub.unsubscribe();
      }
    }


}
