import {clusterApiUrl, Connection} from '@solana/web3.js';
import {WalletAdapterNetwork} from "@solana/wallet-adapter-base";

const network = WalletAdapterNetwork.Devnet
const endpoint = clusterApiUrl(network)
export const connection = new Connection(endpoint)