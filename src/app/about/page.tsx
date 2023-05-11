const About = () => (
  <main className="container mx-auto px-4 py-8">
    <article className="max-w-prose prose mx-auto">
      <h1 className="">About</h1>
      <h2>
        <a href="https://blueskyweb.xyz/" target="_blank" className="text-info">
          Bluesky
        </a>
      </h2>
      <p>
        Bluesky is building a protocol that can make social networks work more
        like email, blogs, or phone numbers — the open systems that power the
        rest of our online lives. The protocol we built, the AT Protocol, is
        close to completion, and the Bluesky app is a microblogging client built
        on it to showcase the protocol’s features. The Bluesky app also
        introduces people to how a social web on the AT Protocol will work.
      </p>
      <h2>
        <a href="https://nostr.how" target="_blank" className="text-info">
          Nostr
        </a>
      </h2>
      <p>
        Nostr stands for “Notes and Other Stuff Transmitted by Relays”. Like
        HTTP or TCP-IP, Nostr is a protocol; an open standard upon which anyone
        can build. Nostr itself is not an app or service that you sign up for.
      </p>
      <p>
        Nostr is designed for simplicity and enables censorship-resistant and
        globally decentralized publishing on the web.
      </p>
      <h2>This site</h2>
      <p>I wanted to compare the content on these two platforms.</p>
      <p>
        <a
          href="https://github.com/npub1zenn0/bluesky-vs-nostr"
          target="_blank"
          className=""
        >
          Find the source code of this site on GitHub.
        </a>
      </p>
    </article>
  </main>
);

export default About;
