import { OkrsService } from './../services/okrs.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  categories: string[];

  @Input() allOkrsResults: any[];
  @Output() updatedCategory = new EventEmitter<string>();

  constructor(
    private okrsService: OkrsService
  ) { }

  ngOnInit(): void {
    this.categories = [...this.okrsService.getAllCategories(this.allOkrsResults)];
  }

  onFilter(category): void {
    this.updatedCategory.emit(category);
  }

}
