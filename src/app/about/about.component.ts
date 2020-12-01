import { map } from "rxjs/operators";
import {
  concat,
  interval,
  noop,
  Observable,
  of,
  scheduled,
  SchedulerLike,
} from "rxjs";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Course } from "../model/course";
import { createHttpObservable } from "../common/util";
import { now } from "moment";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // const source1$ = scheduled([1,2])

    const http$ = createHttpObservable("/api/courses");

    const sub = http$.subscribe(console.log);

    setTimeout(() => sub.unsubscribe(), 0);
  }
}
