import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Experiment } from './experiment.model';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})

export class ExperimentsService {
    private experiments: Experiment[] = [];
    private experimentsUpdated = new Subject<Experiment[]>();

    constructor(private http: HttpClient, private router: Router) {}

    getExperiments() {
      this.http.get<{message: string, experiments: any}>(
        'https://aqueous-ravine-22807.herokuapp.com/api/experiments'
        // 'http://localhost:3000/api/experiments'
        )
        .pipe(map(experimentData => {
          return experimentData.experiments.map(experiment => {
            return {
              id: experiment._id,
              ref: experiment.ref,
              question: experiment.question,
              title: experiment.title,
              imagePath: experiment.imagePath,
              artist: experiment.artist,
              year: experiment.year,
              interviewvideo: experiment.interviewvideo,
              infotext: experiment.infotext,
              credits: experiment.credits,
              showcasevideo: experiment.showcasevideo,
              report: experiment.report,
              telephone: experiment.telephone,
              contactmail: experiment.contactmail,
              website: experiment.website
            };
          });
        }))
        .subscribe((idUpdatedExperiments) => {
          this.experiments = idUpdatedExperiments;
          this.experimentsUpdated.next([...this.experiments]);
        });
    }

    getExperimentsUpdateListener() {
      return this.experimentsUpdated.asObservable();
    }


    getExperiment(id: string) {
      // tslint:disable-next-line: max-line-length
      return this.http.get<{ _id: string, ref: string, question: string, title: string, imagePath: string, artist: string, year: string, interviewvideo: string, infotext: string, credits: string, showcasevideo: string, report: string, telephone: string, contactmail: string, website: string }>('https://aqueous-ravine-22807.herokuapp.com/api/experiments' + id);
    }

    // tslint:disable-next-line: max-line-length
    addExperiment(ref: string, question: string, title: string, image: File, artist: string, year: string, interviewvideo: string, infotext: string, credits: string, showcasevideo: string, report: string, telephone: string, contactmail: string, website: string) {

        const experimentData = new FormData();
        // experimentData.append('id', null);
        experimentData.append('ref', ref);
        // image is stored, using the title of the experiment from above
        experimentData.append('image', image, title);
        experimentData.append('question', question);
        experimentData.append('title', title);
        experimentData.append('artist', artist);
        experimentData.append('year', year);
        experimentData.append('interviewvideo', interviewvideo);
        experimentData.append('infotext', infotext);
        experimentData.append('credits', credits);
        experimentData.append('showcasevideo', showcasevideo);
        experimentData.append('report', report);
        experimentData.append('telephone', telephone);
        experimentData.append('contactmail', contactmail);
        experimentData.append('website', website);

        this.http
          .post<{message: string; experiment: Experiment}>(
            'https://aqueous-ravine-22807.herokuapp.com/api/experiments',
            experimentData
          )
        .subscribe(responseData => {
          const experiment: Experiment = {
            id: responseData.experiment.id,
            ref,
            question,
            title,
            imagePath: responseData.experiment.imagePath,
            artist,
            year,
            interviewvideo,
            infotext,
            credits,
            showcasevideo,
            report,
            telephone,
            contactmail,
            website
          };
          console.log(responseData.message);
          this.experiments.push(experiment);
          this.experimentsUpdated.next([...this.experiments]);
          this.router.navigate(['/']);
      });
    }

    // tslint:disable-next-line: max-line-length
    updateExperiment(id: string, ref: string, question: string, title: string, image: File | string, artist: string, year: string, interviewvideo: string, infotext: string, credits: string, showcasevideo: string, report: string, telephone: string, contactmail: string, website: string) {

      let experimentData: Experiment | FormData;
      if (typeof(image) === 'object') {
        experimentData = new FormData();
        experimentData.append('id', id);
        experimentData.append('ref', ref);
        experimentData.append('question', question);
        experimentData.append('title', title);
        experimentData.append('image', image, title);
        experimentData.append('artist', artist);
        experimentData.append('year', year);
        experimentData.append('interviewvideo', interviewvideo);
        experimentData.append('credits', credits);
        experimentData.append('showcasevideo', showcasevideo);
        experimentData.append('report', report);
        experimentData.append('telephone', telephone);
        experimentData.append('contactmail', contactmail);
        experimentData.append('website', website);
      } else {
        experimentData = {
          id,
          ref,
          question,
          title,
          imagePath: image,
          artist,
          year,
          interviewvideo,
          infotext,
          credits,
          showcasevideo,
          report,
          telephone,
          contactmail,
          website
        };
      }
      this.http
        .put('https://aqueous-ravine-22807.herokuapp.com/api/experiments' + id, experimentData)
        .subscribe(response => {
          const updatedExperiments = [...this.experiments];
          const oldExperimentIndex = updatedExperiments.findIndex(e => e.id === id);
          const experiment: Experiment = {
            id,
            ref,
            question,
            title,
            imagePath: '',
            artist,
            year,
            interviewvideo,
            infotext,
            credits,
            showcasevideo,
            report,
            telephone,
            contactmail,
            website
          };
          updatedExperiments[oldExperimentIndex] = experiment;
          this.experiments = updatedExperiments;
          this.experimentsUpdated.next([...this.experiments]);
          this.router.navigate(['/']);
        });

    }

    deleteExperiment(experimentId: string) {
      this.http.delete('https://aqueous-ravine-22807.herokuapp.com/api/experiments' + experimentId)
      .subscribe(() => {
        const updatedExperiments = this.experiments.filter(experiment => experiment.id !== experimentId);
        this.experiments = updatedExperiments;
        this.experimentsUpdated.next([...this.experiments]);
    });
  }

}

