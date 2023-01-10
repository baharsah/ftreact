import React from 'react'

function Schedules() {
  return (
    <div className="overflow-x-auto mx-32">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Train</th>
        <th>Arrival</th>
        <th>Depature</th>
        <th>Price Per Person (50% off for child under 3 yrs)</th>

      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      <tr>
        <th>1</th>
        <td>Gandalion Train</td>
        <td>30 December 2022 12:30 WIB</td>
        <td>2 January 2023 03:30 WIB</td>
        <td className='font-bold'>Rp. 300.000</td>
      </tr>
      {/* <!-- row 2 --> */}
      <tr>
        <th>1</th>
        <td>Gandalion Train</td>
        <td>30 December 2022 12:30 WIB</td>
        <td>2 January 2023 03:30 WIB</td>
        <td className='font-bold'>Rp. 300.000</td>
      </tr>
      {/* <!-- row 3 --> */}
      <tr>
        <th>1</th>
        <td>Gandalion Train</td>
        <td>30 December 2022 12:30 WIB</td>
        <td>2 January 2023 03:30 WIB</td>
        <td className='font-bold'>Rp. 300.000</td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default Schedules