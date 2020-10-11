import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { get } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class OkrsService {

  readonly OKRS_LINK = 'https://okrcentral.github.io/sample-okrs/db.json';

  constructor(
    private http: HttpClient
  ) { }

  // Returns only required data
  fetchOkrs(): Observable<any> {
    return this.http
      .get(this.OKRS_LINK)
      .pipe(map((resp: any) => resp.data));
  }


  filterAllOkrsParents(okrsResults): any[] {
    if (!okrsResults) {
      return [];
    }
    return okrsResults.filter(okrs => {
      const parentObjId = get(okrs, 'parent_objective_id');
      return parentObjId === '' || !parentObjId; // empty or null or undefined
    });
  }

  getAllOkrsOfGivenParent(parentId, allResults = []): any[] {
    if (!parentId) {
      return [];
    }

    return allResults.filter(okrs => {
      return get(okrs, 'parent_objective_id') === parentId;
    });
  }

  getAllCategories(allResults = []): Set<string> {
    const categories = new Set<string>();
    allResults.forEach(okrs => {
      categories.add(okrs.category);
    });
    return categories;
  }

  filterAllOkrsParentsByCategory(allResults = [], category): any[] {
    const parentOkrs = this.filterAllOkrsParents(allResults);
    return parentOkrs.filter(okrs => {
      return okrs.category === category;
    });
  }
}
