import React, { useState, useEffect } from 'react';
import { BehaviorSubject, of, merge } from 'rxjs';
import './index.css';
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter,
  switchMap,
  catchError,
} from 'rxjs/operators';
import { InputSearch, SearchResult } from './components';

function App() {
  const [state, setState] = useState({
    data: [],
    loading: false,
    errorMessage: '',
    noResults: false,
  });

  const [subject, setSubject] = useState(null);

  useEffect(() => {
    if (subject === null) {
      const sub = new BehaviorSubject('');
      setSubject(sub);
    } else {
      const observable = subject
        .pipe(
          map((s) => s.trim()),
          distinctUntilChanged(),
          filter((s) => s.length >= 2),
          debounceTime(200),
          switchMap((term) =>
            merge(
              of({ loading: true, errorMessage: '', noResults: false }),
              fetch(
                'https://fa-search-backend.herokuapp.com/search?delay=true&term=' +
                  term
              ).then((response) => {
                if (response.ok) {
                  return response.json().then((data) => ({
                    data,
                    loading: false,
                    noResults: data.length === 0,
                  }));
                }
                return response.json().then((data) => ({
                  data: [],
                  loading: false,
                  errorMessage: data.title,
                }));
              })
            )
          ),
          catchError(() => ({
            loading: false,
            errorMessage: 'An application error occured',
          }))
        )
        .subscribe((newState) => {
          setState((s) => Object.assign({}, s, newState));
        });

      return () => {
        observable.unsubscribe();
        subject.unsubscribe();
      };
    }
  }, [subject]);

  const onChange = (e) => {
    if (subject) {
      return subject.next(e.target.value);
    }
  };

  return (
    <div className={'p-8'}>
      <InputSearch loading={state.loading} onChange={onChange} />
      <SearchResult
        data={state.data}
        errorMessage={state.errorMessage}
        noResults={state.noResults}
      />
    </div>
  );
}

export default App;
