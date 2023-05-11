export default function Home() {
  return (
    <main className="flex flex-col basis-full lg:flex-row">
      <div className="flex w-full h-full lg:w-1/2 flex-grow">
        <iframe className="w-full h-full" src="https://firesky.tv"></iframe>
      </div>
      <div className="flex w-full h-full lg:w-1/2 flex-grow">
        <iframe
          className="w-full h-full"
          src="https://firenostr.vercel.app/?sources[]=nos.lol&sources[]=purplepag.es&sources[]=nostr-pub.wellorder.net&sources[]=nostr.wine&sources[]=relay.damus.io&sources[]=bitcoiner.social"
        ></iframe>
      </div>
    </main>
  );
}
