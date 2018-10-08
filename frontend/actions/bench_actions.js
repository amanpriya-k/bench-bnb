import * as BenchUtil from '../util/bench_api_util'

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

// pojo action

export const receiveBenches = (benches) => ({
  type: RECEIVE_BENCHES,
  benches
})

// thunk action

export const fetchBenches = () => (dispatch) (
  BenchUtil.fetchBenches()
    .then(benches => dispatch(receiveBenches(benches)))
);
