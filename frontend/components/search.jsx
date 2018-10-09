import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from './bench_map';

const Search = (props) => (
  <div>
    <BenchMap benches={props.benches}/>
    <BenchIndex benches={props.benches}
                fetchBenches={props.fetchBenches}/>
  </div>
);

export default Search;
