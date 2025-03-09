import React from 'react'
import './App.css'
import { JobList } from './job'

function App() {
  return (
    <div className='main-full'>
      <Intro />
      <JobList />
    </div>
  )
}

export default App


class Intro extends React.Component {
  render() {
    return <>
      <div className='welcome'>
        <h1>Welcome to UHire</h1>
        <p>The best Job Listing Service in the market</p>
      </div>
      <div className='recomendedJobs'>
        <strong>Recommended jobs</strong>
        <p>102</p>
      </div>
    </>
  }
}

