export default function Projects() {
  return (
    <div id="projects">
      <div id="westy-rentals-container">
        <a href="https://www.loom.com/share/7f5f2c913b854e7d84dc7d44a838436d">
          <img
            id="westy-rentals-gif"
            alt="loom-vid"
            src="https://cdn.loom.com/sessions/thumbnails/7f5f2c913b854e7d84dc7d44a838436d-with-play.gif"
          />
        </a>
        <div>
          As a Volkswagen camper enthusiast, I thought it would be fun to make a
          website where my friends in the van community could rent their
          westfalias to one another. The app allows users to interact with each
          other and rent vans from van owners for their own camping adventures.
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
