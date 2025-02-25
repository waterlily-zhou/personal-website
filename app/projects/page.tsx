export default function Projects() {
  return (
    <div className="min-h-screen relative">
      <div className="max-w-6xl mx-auto px-4 pt-32">
        <h1 className="text-3xl font-light mb-12">Projects & Writings</h1>
        
        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-xl font-light mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
              <h3 className="text-lg font-medium mb-2">DeFi Platform</h3>
              <p className="text-gray-400 mb-4">
                A decentralized finance platform built with Next.js and Ethereum smart contracts.
                Features include staking, yield farming, and liquidity pools.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">Next.js</span>
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">Ethereum</span>
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">Solidity</span>
              </div>
            </div>

            <div className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
              <h3 className="text-lg font-medium mb-2">NFT Marketplace</h3>
              <p className="text-gray-400 mb-4">
                A marketplace for digital collectibles with features for minting, 
                trading, and showcasing NFTs.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">React</span>
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">TypeScript</span>
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">IPFS</span>
              </div>
            </div>
          </div>
        </section>

        {/* Writings Section */}
        <section>
          <h2 className="text-xl font-light mb-8">Recent Writings</h2>
          <div className="space-y-8">
            <article className="border-b border-gray-800 pb-8">
              <h3 className="text-lg font-medium mb-2">
                The Future of Web3 Development
              </h3>
              <p className="text-gray-400 mb-2">
                An exploration of emerging trends in Web3 development and their impact
                on the future of decentralized applications.
              </p>
              <span className="text-sm text-gray-500">December 2023</span>
            </article>

            <article className="border-b border-gray-800 pb-8">
              <h3 className="text-lg font-medium mb-2">
                Building Scalable DApps with Next.js
              </h3>
              <p className="text-gray-400 mb-2">
                A technical guide on creating performant and scalable decentralized
                applications using Next.js and modern Web3 tools.
              </p>
              <span className="text-sm text-gray-500">November 2023</span>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
} 