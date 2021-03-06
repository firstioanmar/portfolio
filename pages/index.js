import Contact from '../components/Contact'
import Experience from '../components/Experience'
import FooterPage from '../components/FooterPage'
import HeadPage from '../components/HeadPage'
import HomePage from '../components/HomePage'
import Portfolio from '../components/Portfolio'

export default function Home() {
  return (
    <div>
      <HeadPage/>
      <HomePage/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <FooterPage/>
    </div>
  )
}
