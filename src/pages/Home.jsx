import Hero from '../sections/home/Hero'
import Reel from '../sections/home/Reel'
import AboutIntro from '../sections/home/AboutIntro'
import ServicesHome from '../sections/home/ServicesHome'
import ContactHome from '../sections/home/ContactHome'
import PageWrapper from '../components/layout/PageWrapper'

export default function Home() {
  return <PageWrapper><Hero /><Reel /><AboutIntro /><ServicesHome /><ContactHome /></PageWrapper>
}
