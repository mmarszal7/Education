import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as CollectionActions from '../store/book.actions';
import { Book } from '../../shared/models/book';
import { BooksState } from '../store/book.state';
import { getBookCollection } from '../store/book.selectors';

@Component({
    selector: 'bc-collection-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <mat-card>
      <mat-card-title>My Collection</mat-card-title>
    </mat-card>

    <bc-book-preview-list [books]="books$ | async"></bc-book-preview-list>
  `,
    /**
     * Container components are permitted to have just enough styles
     * to bring the view together. If the number of styles grow,
     * consider breaking them out into presentational
     * components.
     */
    styles: [
        `
    mat-card-title {
      display: flex;
      justify-content: center;
    }
  `,
    ],
})
export class CollectionPageComponent implements OnInit {
    books$: Observable<Book[]>;

    constructor(private store: Store<BooksState>) {
        this.books$ = store.pipe(select(getBookCollection));
    }

    ngOnInit() {
        this.store.dispatch(new CollectionActions.LoadCollection());
    }
}
