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

    addExperiment(ref: string, title: string, imageurl: string, artist: string, year: string,
                  interviewvideo: string, infotext: string, credits: string, showcasevideo: string,
                  report: string, telephone: string, contactmail: string, website: string) {

        // tslint:disable-next-line: max-line-length
        const exp: Experiment = { id: null, ref, title, imageurl, artist, year, interviewvideo, infotext, credits, showcasevideo, report, telephone, contactmail, website };

        this.http.post<{message: string}>('http://localhost:3000/api/addexperiment', exp)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.experiments.push(exp);
        this.experimentsUpdated.next([...this.experiments]);
      });

    }

}

