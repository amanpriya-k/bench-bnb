

export const fetchBenches = () => (
  $.ajax({
    url: 'api/benches',
    method: 'GET',
    error: (err) => console.log(err.statusText)
  })
);

export const getSingleBench = (benchId) => (
  $.ajax({
    url:  `api/benches/${benchId}`,
    method: 'GET',
    error: (err) => console.log(err.statusText)
  })
)
