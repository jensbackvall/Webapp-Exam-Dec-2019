import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Experiment } from './experiment.model';

@Injectable({providedIn: 'root'})

export class ExperimentsService {
    private experiments: Experiment[] = [];
    private experimentsUpdated = new Subject<Experiment[]>();

    constructor(private http: HttpClient) {}

    getExperiments() {
      this.http.get<{message: string, experiments: any}>(
        'http://localhost:3000/api/experiments'
        )
        .pipe(map((experimentData) => {
          return experimentData.experiments.map(experiment => {
            return {
              id: experiment._id,
              ref: experiment.ref,
              title: experiment.title,
              imageurl: experiment.imageurl,
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
      return this.http.get<any>('http://localhost:3000/api/experiments/' + id);
    }

    addExperiment(ref: string, title: string, imageurl: string, artist: string, year: string,
                  interviewvideo: string, infotext: string, credits: string, showcasevideo: string,
                  report: string, telephone: string, contactmail: string, website: string) {

        // tslint:disable-next-line: max-line-length
        const experiment: Experiment = {
          id: null,
          ref: ref,
          title: title,
          imageurl: imageurl,
          artist: artist,
          year: year,
          interviewvideo: interviewvideo,
          infotext: infotext,
          credits: credits,
          showcasevideo: showcasevideo,
          report: report,
          telephone: telephone,
          contactmail: contactmail,
          website: website
        };

        this.http
          .post<{message: string, experimentId: string}>(
            'http://localhost:3000/api/experiments',
            experiment
          )
        .subscribe((responseData) => {
          console.log(responseData.message);
          const experimentId = responseData.experimentId;
          experiment.id = experimentId;
          this.experiments.push(experiment);
          this.experimentsUpdated.next([...this.experiments]);
      });
    }

    updateExperiment(id: string, ref: string, title: string, imageurl: string, artist: string, year: string,
      interviewvideo: string, infotext: string, credits: string, showcasevideo: string,
      report: string, telephone: string, contactmail: string, website: string) {

      // tslint:disable-next-line: max-line-length
      const experiment: Experiment = {
        id: id,
        ref: ref,
        title: title,
        imageurl: imageurl,
        artist: artist,
        year: year,
        interviewvideo: interviewvideo,
        infotext: infotext,
        credits: credits,
        showcasevideo: showcasevideo,
        report: report,
        telephone: telephone,
        contactmail: contactmail,
        website: website
      };

      this.http
        .put('http://localhost:3000/api/experiments/' + id, experiment)
        .subscribe(response => {
          const updatedExperiments = [...this.experiments];
          const oldExperimentIndex = updatedExperiments.findIndex(e => e.id === experiment.id);
          updatedExperiments[oldExperimentIndex] = experiment;
          this.experiments = updatedExperiments;
          this.experimentsUpdated.next([...this.experiments]);
        });

    }

    deleteExperiment(experimentId: string) {
      this.http.delete('http://localhost:3000/api/experiments/' + experimentId)
      .subscribe(() => {
        const updatedExperiments = this.experiments.filter(experiment => experiment.id !== experimentId);
        this.experiments = updatedExperiments;
        this.experimentsUpdated.next([...this.experiments]);
    });
  }

}

