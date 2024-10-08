import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-custom-paginator',
  templateUrl: './custom-paginator.component.html',
  styleUrls: ['./custom-paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomPaginatorComponent {
  @Input() length: number = 0;
  @Input() pageSize: number = 10;
  @Input() pageNumber: number = 0;
  @Input() pageSizeOptions: number[] = [5, 10, 25];
  @Input() showFirstLastButtons: boolean = false;
  @Input() hidePageSize: boolean = false;
  @Input() disabled: boolean = false;

  @Output() pageChange = new EventEmitter<PageEvent>();
  @Output() pageSizeChange = new EventEmitter<number>();

  previousPageIndex!: number;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    setTimeout(() => this.cdr.detectChanges(), 0);
  }

  paginate(event: PageEvent) {
    this.previousPageIndex = event.previousPageIndex ?? 0;

    this.pageChange.emit(event);
  }

  updatePageSize(): void {
    this.pageSizeChange.emit(this.pageSize);
  }

  getPageNumber(): number {
    return Math.ceil(this.length / this.pageSize);
  }
}
