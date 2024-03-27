export default function Projects() {
  return (
    <div id="projects">
      <h3>Web Development Projects:</h3>
      <div id="westy-rentals-container">
        <a href="https://www.loom.com/share/7f5f2c913b854e7d84dc7d44a838436d">
          <img
            id="westy-rentals-gif"
            alt="loom-vid"
            src="https://cdn.loom.com/sessions/thumbnails/7f5f2c913b854e7d84dc7d44a838436d-with-play.gif"
          />
        </a>
        <div>
          Driven by my passion for Volkswagen campers, I created a website where
          fellow enthusiasts can rent their beloved Westfalias to one another.
          This innovative app fosters connections within the van community,
          allowing users to interact, share experiences, and embark on
          unforgettable camping adventures by renting unique vans from
          passionate van owners.
          <a
            href="https://github.com/mroesinger/westfalia-rentals"
            id="westfalia-rentals-repo"
          >
            <p>repo</p>
          </a>
        </div>
      </div>
      <div id="synth-swap-container">
        <img
          id="synth-swap-image"
          src="synthswap.png"
          alt="synth swap screenshot"
        />
        <div>
          Playing, fixing, and trading vintage analog synthesizers has been a
          passion of mine for all of my adult life. For my very first JavaScript
          project, I made a simple p2p app, where San Francisco bay area users
          could host their synths for free, as an alternative to craigslist.
          <a href="https://synthswap.roesinger.dev" id="synth-swap-link">
            <p>synthswap.roesinger.dev</p>
          </a>
          <a
            href="https://github.com/mroesinger/synthswap"
            id="synth-swap-repo"
          >
            <p>repo</p>
          </a>
        </div>
      </div>
    </div>
  );
}
