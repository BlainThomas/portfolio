import BadBilliardsWeb from '../img/BadBilliardsWeb.png'
import BadBilliardsGame from '../img/BadBilliardGame.png'
import DevFinder from '../img/DevFinder.png'
import Web3MessageMe from '../img/Web3MessageMe.png'
import EchoAlley from '../img/EchoAlley.png'



export const projectsList = [
  {
    title: 'Bad A Billiards Web',
    description:
      'An e-commerce site for an NFT group. It takes payments in crypto as well as has a mint page. It was built with a Supabase backend for merchandise and purchases. The Stripe payment system is used for card payments as one of the checkout options.',
    image: BadBilliardsWeb,
    tech: [
      'React',
      'Next.js',
      'Tailwind',
      'Vercel',
      'Square Payment',
      'Playfab',
      'Web3',
      'Supabase',
      'Ether.js'
    ],
    demoAccount: {
      email: 'testing',
      password: 'testing',
    },
    liveDemo: 'https://www.badabilliards.com/',
    sourceCode: '',
  },
  {
    title: 'Bad A Billiards iOS',
    description:
      "An mobile game for an NFT group. Currently finishing the beta version of the game which is creating a strong multiplayer system. Next step will be to finalize MetaMask connection for blockchain assets in game.",
    image: BadBilliardsGame,
    tech: [
      'C#',
      'iOS',
      'Unity',
      'Playfab',
      'Photon',
      'Web3',
      'Supabase',
      'MetaMask'
    ],
    demoAccount: {
      email: 'testing',
      password: 'testing',
    },
    liveDemo: 'https://apps.apple.com/us/app/bad-a-billiards/id6443683898',
    sourceCode: '',
  },
  {
    title: 'Bad A Billiards Android',
    description:
      "An mobile game for an NFT group. Currently finishing the beta version of the game which is creating a strong multiplayer system. Next step will be to finalize MetaMask connection for blockchain assets in game.",
    image: BadBilliardsGame,
    tech: [
      'C#',
      'Android',
      'Unity',
      'Playfab',
      'Photon',
      'Web3',
      'Supabase',
      'MetaMask'
    ],
    demoAccount: {
      email: 'testing',
      password: 'testing',
    },
    liveDemo: 'https://play.google.com/store/apps/details?id=com.dev_on.badabilliards',
    sourceCode: '',
  },
  {
    title: 'devFinder',
    description:
      'A simple React app that searches for the profile from GitHub.',
    image: DevFinder,
    tech: [
      'React',
      'TypeScript',
      'Netlify',
      'API',
    ],
    liveDemo: 'https://devs-dev-finder.netlify.app/',
    sourceCode: 'https://github.com/BlainThomas/devFinder',
  },
  {
    title: 'Web3MessageMe',
    description:
      'A React app that uses web3 to sign and congirm signatures on the blockchain.',
    image: Web3MessageMe,
    tech: [
      'React',
      'TypeScript',
      'Netlify',
      'Web3',
    ],
    liveDemo: 'https://web3messageme.netlify.app/',
    sourceCode: 'https://github.com/BlainThomas/web3MessageMe',
  },
  {
    title: 'Echo Alley',
    description:
      'A React social media app that uses web3 to post messages with a profile picture.',
    image: EchoAlley,
    tech: [
      'React',
      'TypeScript',
      'Vercel',
      'Web3',
      'Solidity',
      'test network',
    ],
    liveDemo: 'https://echo-alley.vercel.app/',
    sourceCode: 'https://github.com/BlainThomas/echo-alley',
  },
  
];
