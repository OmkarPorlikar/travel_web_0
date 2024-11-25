
import NatureCard from '../NatureCard/NatureCard';
import Features from '../Feature/Feature';
import Services from '../Services/Services';
import Itinerary from '../itinerary/Itinerary';
import Testimonial from '../Testimonials/Testimonials';
import GallerySection from '../roadmap/GallerySections';
import Destinations from '../Destinations/Destinations'
import ItineraryCards from '../../pages/roadmap_page/itinerary_page';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from '../Hero/Hero';
import FeaturesPage from '../../pages/FeaturePage/FeaturePage';
import ServicesPage from '../../pages/ServicesPage/ServicesPage';
import NatureCardPage from '../../pages/NatureCardPage/NatureCardPage';
import TestimonialsPage from '../../pages/TestimonialsPage/TestimonialsPage';
function Home() {
  return (
    <Router>
        <Header />

        <Routes>
          {/* Main Page Route */}
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <NatureCard />
                <Features />
                <Services />
                <Itinerary />
                <Testimonial />
              </div>
            }
          />

          {/* Itinerary Detail Page */}
          <Route
            path="/itinerary/:id"
            element={
              <div>
                <GallerySection />
                <Destinations/>
              </div>
            }
          />

          <Route
            path="/itinerary"
            element={
              <div>
                <ItineraryCards />
              </div>
            }
          />
            <Route
            path="/testimonials"
            element={
              <div>
                <TestimonialsPage/>
              </div>
            }
          />
              <Route
            path="/locations"
            element={
              <div>
<NatureCardPage/>
              </div>
            }
          />

<Route
            path="/features"
            element={
              <div>
<FeaturesPage/>
               </div>
            }
          />

<Route
            path="/services"
            element={
              <div>
<ServicesPage/>
               </div>
            }
          />
        </Routes>
        <Footer />
    </Router>
  );
}

export default Home;
