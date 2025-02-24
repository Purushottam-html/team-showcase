import { useState } from 'react'
import TeamMemberCard from './TeamMemberCard.jsx'

function App() {
  return(
    <div className='team-container'>

      <h1>our team</h1>
      <div className='team-members'>
        <TeamMemberCard
        name = "john doe"
        jobTitle="software engineer"
        />
        <TeamMemberCard
        name = "asdsadas"
        jobTitle="ux designer"
        />

      </div>
      
    </div>
  )
}

export default App
