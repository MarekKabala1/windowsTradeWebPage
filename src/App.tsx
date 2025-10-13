import './App.css';
import Cards from './components/Cards';
import Emergency from './components/Emergency';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Services from './components/Services';
import SlidingDoor from './components/SlidingDoor';

function App() {
  return (
    <main className="app-container">
      <Emergency />
      <SlidingDoor />
      <Hero />
      <Cards />
      <Nav />
      <Services />
      <Gallery />
      <div
        style={{ padding: 'var(--gap-lg)', maxWidth: '75vw', margin: '0 auto' }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, culpa
        accusantium eligendi sequi aspernatur ipsa rerum maiores modi unde
        suscipit quo recusandae, in iusto nesciunt porro vel ratione ipsum?
        Repellendus illum aliquam enim, quaerat adipisci culpa nisi itaque
        minima excepturi repellat facilis ad doloremque distinctio optio quo
        perspiciatis quam officia? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Aspernatur officia excepturi modi esse, accusamus
        sunt, libero explicabo debitis illum asperiores placeat, deleniti magni
        vero labore quibusdam officiis corporis! Fugit rerum reprehenderit
        explicabo, doloremque atque aliquam ipsa deserunt vitae. Itaque
        consequuntur excepturi iste enim dolore veniam ducimus eius, officia
        maiores mollitia? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Facere, culpa accusantium eligendi sequi aspernatur ipsa rerum
        maiores modi unde suscipit quo recusandae, in iusto nesciunt porro vel
        ratione ipsum? Repellendus illum aliquam enim, quaerat adipisci culpa
        nisi itaque minima excepturi repellat facilis ad doloremque distinctio
        optio quo perspiciatis quam officia? Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Aspernatur officia excepturi modi esse,
        accusamus sunt, libero explicabo debitis illum asperiores placeat,
        deleniti magni vero labore quibusdam officiis corporis! Fugit rerum
        reprehenderit explicabo, doloremque atque aliquam ipsa deserunt vitae.
        Itaque consequuntur excepturi iste enim dolore veniam ducimus eius,
        officia maiores mollitia? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Facere, culpa accusantium eligendi sequi aspernatur
        ipsa rerum maiores modi unde suscipit quo recusandae, in iusto nesciunt
        porro vel ratione ipsum? Repellendus illum aliquam enim, quaerat
        adipisci culpa nisi itaque minima excepturi repellat facilis ad
        doloremque distinctio optio quo perspiciatis quam officia? Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Aspernatur officia
        excepturi modi esse, accusamus sunt, libero explicabo debitis illum
        asperiores placeat, deleniti magni vero labore quibusdam officiis
        corporis! Fugit rerum reprehenderit explicabo, doloremque atque aliquam
        ipsa deserunt vitae. Itaque consequuntur excepturi iste enim dolore
        veniam ducimus eius, officia maiores mollitia? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Facere, culpa accusantium eligendi
        sequi aspernatur ipsa rerum maiores modi unde suscipit quo recusandae,
        in iusto nesciunt porro vel ratione ipsum? Repellendus illum aliquam
        enim, quaerat adipisci culpa nisi itaque minima excepturi repellat
        facilis ad doloremque distinctio optio quo perspiciatis quam officia?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        officia excepturi modi esse, accusamus sunt, libero explicabo debitis
        illum asperiores placeat, deleniti magni vero labore quibusdam officiis
        corporis! Fugit rerum reprehenderit explicabo, doloremque atque aliquam
        ipsa deserunt vitae. Itaque consequuntur excepturi iste enim dolore
        veniam ducimus eius, officia maiores mollitia? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Facere, culpa accusantium eligendi
        sequi aspernatur ipsa rerum maiores modi unde suscipit quo recusandae,
        in iusto nesciunt porro vel ratione ipsum? Repellendus illum aliquam
        enim, quaerat adipisci culpa nisi itaque minima excepturi repellat
        facilis ad doloremque distinctio optio quo perspiciatis quam officia?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        officia excepturi modi esse, accusamus sunt, libero explicabo debitis
        illum asperiores placeat, deleniti magni vero labore quibusdam officiis
        corporis! Fugit rerum reprehenderit explicabo, doloremque atque aliquam
        ipsa deserunt vitae. Itaque consequuntur excepturi iste enim dolore
        veniam ducimus eius, officia maiores mollitia?
      </div>
      <Footer />
    </main>
  );
}

export default App;
