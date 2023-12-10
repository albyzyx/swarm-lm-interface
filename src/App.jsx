import "./App.css";
import Chat from "./components/messageComponents/Chat";
import { TableLayout } from "./components/TableComponents/TableLayout";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./components/Landing";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [
    alchemyProvider({ apiKey: "H1zy3SlSUhUCxm06c4-LowqX4ep6ED7g" }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "Swarm LM",
  projectId: "dhd0737fswbevbzl",
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/table" element={<TableLayout />} />
        </Routes>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
