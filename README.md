# 🌕 Useful Links

[Presentation Slides](https://github.com/hyd628/delegation-dao-demo/blob/master/Delegation%20DAO%20Workshop.pdf) 

[Moonbeam Developer Documentation](https://docs.moonbeam.network/)

[Smart Contracts Used](https://github.com/hyd628/delegation-dao-demo/tree/master/packages/hardhat/contracts)

[Connect to Moonbase Alpha RPC](https://docs.moonbeam.network/builders/get-started/networks/moonbase/#network-endpoints)

[Moonbase Alpha Faucet](https://discord.gg/SZNP8bWHZq)

[Moonscan for Moonbase Alpha](https://moonbase.moonscan.io/)

[Subscan for Moonbase Alpha](https://moonbase.subscan.io/)

[Remix IDE](https://remix.ethereum.org/)

[Scaffold-ETH](https://github.com/scaffold-eth/scaffold-eth)

# 🏄‍♂️ Quick Start

Prerequisites: [Node (v16 LTS)](https://nodejs.org/en/download/) plus [Yarn](https://classic.yarnpkg.com/en/docs/install/) and [Git](https://git-scm.com/downloads)

> Clone and install dependencies:

```bash
git clone https://github.com/hyd628/delegation-dao-demo.git
yarn install
```

> Add deployment account's mnemonic to /delegation-dao-demo/packages/hardhat/mnemonic.txt

> Deploy your contracts:

```bash
yarn deploy
```

> In a second terminal window, start your 📱 frontend:

```bash
yarn start
```

🔏 Edit your smart contract in `packages/hardhat/contracts`

📝 Edit your frontend `App.jsx` in `packages/react-app/src`

💼 Edit your deployment scripts in `packages/hardhat/deploy`

📱 Open http://localhost:3000 to see the app
