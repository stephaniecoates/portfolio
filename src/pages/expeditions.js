import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const PageContainer = styled.div`
width: 80%;
margin: 30px auto;
@media only screen and (min-width: 600px) {
  width: 75%;
}
  @media only screen and (min-width: 800px) {
    width: 70%;
  @media only screen and (min-width: 900px) {
    width: 60%;
  }
`

const Header = styled.h1`
  display: flex;
  justify-content: flex-start;
  font-weight: bold;
  margin-bottom: 40px;
`
const Subhead = styled.h3`
  margin-top: 50px;
  display: flex;
  justify-content: flex-start;
  font-weight: bold;
  `
  const Content = styled.p`
  line-height: 1.5em;
  `
  const Bullet = styled.li`
  line-height: 1.5em;
  `

  const goals = {
      travel: [
          'Travel solo to another country',
          'Visit every continent',
          'Visit 100 countries',
          'Visit all 50 states, make a friend in each one',
          'Visit all U.S. National Parks',
          'Swim in every ocean',
          'Live abroad',
          'Live in the mountains',
          'Tour the U.S. by train',
          'Go on an African Safari',
          'Work at a hostel on the beach & learn to surf',
      ],
          outdoorAdventure: [
          'Backpack Tahoe Rim Trail',
          'Backpack PCT',
          'Backpack Lost Coast Trail',
          'Grand Canyon Rim-to-Rim hike',
          'Hike Camino de Santiago',
          'Hike Long Range Traverse, Canada',
          'Hike NZ Great Walks',
          'Hike Inca Trail',
          'Climb Kilimanjaro',
          'Snowman Trek, Bhutan',
          'Go to Everest Base Camp',
          'Hike Tour Du Mont Blanc in Europe',
          'Trek Patagonia',
          'Climb the Grand Teton',
          'See the Northern Lights',
          'Go skydiving',
          'Go bungee jumping',
          'Cliff jump 50+ feet',
          'PADI divemaster, be an instructor',
          'Shark dive',
          'Horseback ride on the beach',
          'Learn to surf',
          'Ride in a helicopter',
          'Go mountain biking',
          'Canyoneer down a waterfall',
          'Kitesurf/windsurf',
          'Parasail',
      ],
      simplicity: [
      'Go without social media for a month',
      'Go without internet for a month',
      'Go without technology for a month',
      'Own less than 30 things',
      'Learn to farm & grow my own food',
      'Live in a yurt/tiny house off the grid',
      ],
      career: [
      'Teach English abroad',
      'Be a wilderness therapy guide',
      'Volunteer search and rescue',
      'Start my own freelance business',
      'Learn to code',
      'Write a book',
      ],
      fitness: [
      'learn acroyoga',
      'learn self-defense',
      'do 10 consecutive pushups',
      'do 5 consecutive pull ups',
      'do an unsupported handstand',
      'squat my bodyweight',
      'Run a 5k',
      'Run a Spartan race',
      'Do a Tough Mudden',
      'Do a triathalon',
      ],
      other: [
      'meditate daily for a month',
      'Become fluent in Spanish',
      ]
  }
  const lifeList = () => {
      const {travel, outdoorAdventure, simplicity, career, fitness, other} = goals
  return (
    <Layout>
      <PageContainer>
        <Header>life list</Header>
        <Content>
          Growing up, my family made it a priority to get outside every chance we got. We spent our summers mountain biking, swimming in muddy lakes, roasting hot dogs over the fire, and sleeping under the stars.
        </Content>
        <Content>
           Whether it's from this adventurous upbringing, or the fact that I read a lot of personal development books (probably both!), I crave spontaneity and enjoy seeking out discomfort in order to grow. I find myself bored doing the same routine week after week and am happiest when I'm challenging myself. 
        </Content>
        <Content>
          There's a lot of things I want to do in life. (I'm also
          obsessed with making lists.) This is the physical product of my
          ever-changing "life list" - a chronicle of the expeditions and
          challenges I hope to accomplish in my lifetime. Most
          travel/outdoor-related, but there are some mental, social, health, and
          career-oriented goals as well. Always having at least one goal I'm actively working toward
          keeps me feeling engaged and continuously growing.
        </Content>
        <Content>
          At the very least, having this out on the internet keeps me
          accountable and focused on the things that truly matter to me.
          Hopefully it inspires others, too.
        </Content>
        <Content>
          A big motivator for pursuing a career in tech was the flexibility to
          do meaningful work, make a good living, and still be able to pursue
          these goals.
        </Content>
        <Subhead>travel</Subhead>
        <ul>
        {travel.map(goal => (
            <Bullet>{goal}</Bullet>
        ))}</ul>
        <Subhead>outdoor adventure</Subhead>
        <ul>
        {outdoorAdventure.map(goal => (
            <Bullet>{goal}</Bullet>
        ))}</ul>
        <Subhead>simplicity</Subhead>
        <ul>
        {simplicity.map(goal => (
            <Bullet>{goal}</Bullet>
        ))}</ul>
        <Subhead>career</Subhead>
        <ul>
        {career.map(goal => (
            <Bullet>{goal}</Bullet>
        ))}
        </ul>
        <Subhead>fitness</Subhead>
        <ul>
        {fitness.map(goal => (
            <Bullet>{goal}</Bullet>
        ))}
        </ul>
        <Subhead>other</Subhead>
        <ul>
        {other.map(goal => (
            <Bullet>{goal}</Bullet>
        ))}
        </ul>
        <br />
        <br />
      </PageContainer>
    </Layout>
  )
}

export default lifeList
