import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ExperimentsService } from '../experiment/experiments.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Experiment } from '../experiment/experiment.model';
import { mimeType } from './mime-type.validator';

@Component({
    selector: 'app-addexperiment',
    templateUrl: './addexperiment.component.html',
})
export class AddExperimentComponent implements OnInit {

    private mode = 'addforsoeg';
    private experimentId: string;
    experiment: Experiment;
    form: FormGroup;
    imagePreview: string;

    constructor(public experimentsService: ExperimentsService, public route: ActivatedRoute) {}

    ngOnInit(): void {
      this.form = new FormGroup({
        question: new FormControl(null, {
          validators: [Validators.required]
        }),
        title: new FormControl(null, {
          validators: [Validators.required]
        }),
        image: new FormControl(null, {
          validators: [Validators.required],
          asyncValidators: [mimeType]
        }),
        artist: new FormControl(null, {
          validators: [Validators.required]
        }),
        year: new FormControl(null, {
          validators: [Validators.required]
        }),
        interviewvideo: new FormControl(null, {
          validators: [Validators.required]
        }),
        infotext: new FormControl(null, {
          validators: [Validators.required]
        }),
        credits: new FormControl(null, {
          validators: [Validators.required]
        }),
        showcasevideo: new FormControl(null, {
          validators: [Validators.required]
        }),
        report: new FormControl(null, {
          validators: [Validators.required]
        }),
        telephone: new FormControl(null, {
          validators: [Validators.required]
        }),
        contactmail: new FormControl(null, {
          validators: [Validators.required]
        }),
        website: new FormControl(null, {
          validators: [Validators.required]
        })
      });
      this.experiment = {
        id: '',
        ref: '',
        question: '',
        title: '',
        imagePath: '',
        artist: '',
        year: '',
        interviewvideo: '',
        infotext: '',
        credits: '',
        showcasevideo: '',
        report: '',
        telephone: '',
        contactmail: '',
        website: ''
      };
      this.route.paramMap.subscribe((paramMap: ParamMap) => {
        if (paramMap.has('experimentId')) {
          this.mode = 'editforsoeg';
          this.experimentId = paramMap.get('experimentId');
          console.log('ID: ', this.experimentId);
          console.log('this.experiment BEFORE populating values: ', this.experiment);
          this.experimentsService.getExperiment(this.experimentId).subscribe(experimentData => {

            console.log(experimentData);
            this.experiment.id = experimentData._id;
            this.experiment.ref = experimentData.ref;
            this.experiment.question = experimentData.question;
            this.experiment.title = experimentData.title;
            this.experiment.imagePath = experimentData.imagePath;
            this.experiment.artist = experimentData.artist;
            this.experiment.year = experimentData.year;
            this.experiment.interviewvideo = experimentData.interviewvideo;
            this.experiment.infotext = experimentData.infotext;
            this.experiment.credits = experimentData.credits;
            this.experiment.showcasevideo = experimentData.showcasevideo;
            this.experiment.report = experimentData.report;
            this.experiment.telephone = experimentData.telephone;
            this.experiment.contactmail = experimentData.contactmail;
            this.experiment.website = experimentData.website;

            console.log('this.experiment AFTER populating values: ', this.experiment);

            this.form.setValue({
              question: this.experiment.question,
              title: this.experiment.title,
              image: this.experiment.imagePath,
              artist: this.experiment.artist,
              year: this.experiment.year,
              interviewvideo: this.experiment.interviewvideo,
              infotext: this.experiment.infotext,
              credits: this.experiment.credits,
              showcasevideo: this.experiment.showcasevideo,
              report: this.experiment.report,
              telephone: this.experiment.telephone,
              contactmail: this.experiment.contactmail,
              website: this.experiment.website
            });
          });
        } else {
          console.log('ADDING FORSOEG!!!');
          this.mode = 'addforsoeg';
          this.experimentId = null;
        }
      });
    }

    onImagePicked(event: Event) {
      const imageFile = (event.target as HTMLInputElement).files[0];
      this.form.patchValue({image: imageFile});
      this.form.get('image').updateValueAndValidity();
      console.log(imageFile);
      console.log(this.form);
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(imageFile);
    }


    onSaveExperiment() {
        if (this.form.invalid) {
            console.log('INVALID FORM!!!');
            return;
        }

        if (this.mode === 'addforsoeg') {
          this.experimentsService.addExperiment(
            // adding a reference using the title field
            this.form.value.title.replace(/\s/g, ''),
            this.form.value.question,
            this.form.value.title,
            this.form.value.image,
            this.form.value.artist,
            this.form.value.year,
            this.form.value.interviewvideo,
            this.form.value.infotext,
            this.form.value.credits,
            this.form.value.showcasevideo,
            this.form.value.report,
            this.form.value.telephone,
            this.form.value.contactmail,
            this.form.value.website
          );
        } else {
          this.experimentsService.updateExperiment(
            this.experimentId,
            // adding a reference using the title field
            this.form.value.title.replace(/\s/g, ''),
            this.form.value.question,
            this.form.value.title,
            this.form.value.image,
            this.form.value.artist,
            this.form.value.year,
            this.form.value.interviewvideo,
            this.form.value.infotext,
            this.form.value.credits,
            this.form.value.showcasevideo,
            this.form.value.report,
            this.form.value.telephone,
            this.form.value.contactmail,
            this.form.value.website
          );
        }
        this.form.reset();
    }

}
