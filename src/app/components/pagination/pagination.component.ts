import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nmp-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  public currentPage: number;
  public paginationPages: number[];

  private totalPages: number;
  private pagesLimit: number;

  @Input() public set SetCurrentPage(value: number) {
    this.currentPage = value;
    this.createPagination();
  }
  @Input() public set SetTotalPages(value: number) {
    this.totalPages = value;
    this.createPagination();
  }
  @Input() public set SetPagesLimit(value: number) {
    this.pagesLimit = value ? value : 5;
  }

  @Output() public pageChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  public ngOnInit(): void { }

  private createPagination(): void {
    if (!this.pagesLimit) this.pagesLimit = 5;
    this.paginationPages = [];
    const visiblePages = this.totalPages > this.pagesLimit ? this.pagesLimit : this.totalPages;
    let firstPage = this.currentPage - Math.floor(visiblePages / 2);

    if (firstPage + this.pagesLimit > this.totalPages) firstPage = this.totalPages - this.pagesLimit + 1;
    if (firstPage <= 0) firstPage = 1;

    for (let i = 0; i < visiblePages; i++) {
      this.paginationPages.push(firstPage);
      firstPage++;
    }
  }

  public isPreviousPage(): boolean {
    return this.currentPage > 1;
  }

  public isNextPage(): boolean {
    return this.currentPage < this.totalPages;
  }

  public getPreviousPage(): void {
    this.pageChanged.emit(this.currentPage - 1);
  }

  public getNextPage(): void {
    this.pageChanged.emit(this.currentPage + 1);
  }

  public getPage(pageNumber: number): void {
    this.pageChanged.emit(pageNumber);
  }
}
