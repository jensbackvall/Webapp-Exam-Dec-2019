import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ExperimentsService } from '../experiment/experiments.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Experiment } from '../experiment/experiment.model';

@Component({
    selector: 'app-addexperiment',
    templateUrl: './addexperiment.component.html',
})
export class AddExperimentComponent implements OnInit {

    private mode = 'add';
    private experimentId: string;
    experiment: Experiment;

    constructor(public experimentsService: ExperimentsService, public route: ActivatedRoute) {}

    ngOnInit(): void {
      this.route.paramMap.subscribe((paramMap: ParamMap) => {
        if (paramMap.has('experimentId')) {
          this.mode = 'edit';
          this.experimentId = paramMap.get('experimentId');
          this.experiment = this.experimentsService.getExperiment(this.experimentId);
        } else {
          this.mode = 'create';
          this.experimentId = null;
        }
      });
      console.log("STASRTINGSTARTINGSTARTING");
      console.log(this.experiment);
      console.log("DONEDONEDONE")
    }


    onAddExperiment(form: NgForm) {
        if (form.invalid) {
            return;
        }

        console.log("ADDING NEW TO DATABASE");
        // tslint:disable-next-line: max-line-length
        this.experimentsService.addExperiment(form.value.ref, form.value.title, 'assets/img/' + form.value.imageurl, form.value.artist, form.value.year, form.value.interviewvideo, form.value.infotext, form.value.credits, form.value.showcasevideo, form.value.report, form.value.telephone, form.value.contactmail, form.value.website);
        console.log("ADDED :) :) !!!");

        // form.resetForm();
    }

}
