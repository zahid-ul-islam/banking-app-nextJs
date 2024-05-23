import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = {
        firstName:"Zahid",
        lastName:"Fahim",
        email: "fahim@gmail.com"
    }
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                type="greeting"
                title="Welcome"
                user = {loggedIn?.firstName || "Guest"}
                subtext = "Explore and manage your account and transactions efficiently."

                />
                <TotalBalanceBox 
                 accounts = {[]}
                 totalBanks={1}
                 totalCurrentBalance={2500.75}
                
                />

            </header>
        </div>
        <RightSidebar user={loggedIn}
        transactions={[]}
        banks={[]}/>
    </section>
  )
}

export default Home