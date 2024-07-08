import Cover from "../components/Cover"
import FactsGrid from "../components/FactsGrid"
import ServiceCards from "../components/ServiceCards"
import HomeText from "../components/HomeText"
import Counter from "../components/Counter"
import Testimonials from "../components/Testimonials"
const Home = () => {
  return (
    <>
      <Cover/>
      <HomeText/>
      <ServiceCards/>
      <Testimonials/>
      <FactsGrid/>
      <Counter/>
    </>
  )
}

export default Home
