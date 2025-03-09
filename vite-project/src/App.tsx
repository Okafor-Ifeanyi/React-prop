import { useState } from 'react'
import './App.css'
import { JobList } from './Job'

// function App() {
//   return (
//     <div className='main-full'>
//       <Intro />
//       <JobList />
//     </div>
//   )
// }
function App() {
  const [totalJobs, setTotalJobs] = useState(0); // Manage total jobs state

  return (
      <div className="main-full">
           <Intro totalJobs={totalJobs} />
           <JobList setTotalJobs={setTotalJobs} />
          {totalJobs === 0 && <NoJobs />}
      </div>
  );
}

export default App


// class Intro2 extends React.Component {
//   render() {
//     return <>
//       <div className='welcome'>
//         <h1>Welcome to UHire</h1>
//         <p>The best Job Listing Service in the market</p>
//       </div>
//       <div className='recomendedJobs'>
//         <strong>Recommended jobs</strong>
//         <p>102</p>
//       </div>
//     </>
//   }
// }

// Intro Component
const Intro = ({ totalJobs }: { totalJobs: number }) => {
  return (
      <>
          <div className="welcome">
              <h1>Welcome to UHire</h1>
              <p>The best Job Listing Service in the market</p>
          </div>
          <div className="recomendedJobs">
              <strong>Recommended jobs</strong>
              <p>{totalJobs}</p>
          </div>
      </>
  );
};

 const NoJobs = () => {
  return (
      <div className="no-jobs">
          <h2>No jobs available at the moment.</h2>
      </div>
  );
};