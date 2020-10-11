import { Component, OnInit } from '@angular/core';
import { OkrsService } from '../services/okrs.service';
import { get } from 'lodash';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.scss']
})
export class ObjectivesComponent implements OnInit {

  allOkrsResults = [];
  okrsParents = [];
  firstOkrs: any;
  childrenOfActiveParentOkrs: any[] = [];

  constructor(
    private okrsService: OkrsService
  ) { }

  ngOnInit(): void {
    this.okrsService.fetchOkrs()
      .subscribe(results => {
        this.allOkrsResults = results;
        this.okrsParents = this.okrsService.filterAllOkrsParents(this.allOkrsResults);
        this.firstOkrs = this.okrsParents.length ? this.okrsParents[0] : null;
        this.onParentChange({});
      });
  }

  filterByCategory(category): void {
    this.okrsParents = this.okrsService.filterAllOkrsParentsByCategory(this.allOkrsResults, category);
    this.firstOkrs = this.okrsParents.length ? this.okrsParents[0] : null;
    this.onParentChange({});
  }

  onParentChange($event): void {
    const parentId = $event.panelId || get(this.firstOkrs, 'id');
    this.childrenOfActiveParentOkrs = this.okrsService.getAllOkrsOfGivenParent(parentId, this.allOkrsResults);
  }

}
