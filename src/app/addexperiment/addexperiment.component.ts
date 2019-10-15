import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ExperimentsService } from '../experiment/experiments.service';

@Component({
    selector: 'app-addexperiment',
    templateUrl: './addexperiment.component.html',
})
export class AddExperimentComponent {

    constructor(public experimentsService: ExperimentsService) {}

    onAddExperiment(form: NgForm) {
        if (form.invalid) {
            return;
        }

        // tslint:disable-next-line: max-line-length
        this.experimentsService.addExperiment(form.value.ref, form.value.title, 'assets/img/' + form.value.imageurl, form.value.artist, form.value.year, form.value.interviewvideo, form.value.infotext, form.value.credits, form.value.showcasevideo, form.value.report, form.value.telephone, form.value.contactmail, form.value.website);

        // form.resetForm();
    }

}
