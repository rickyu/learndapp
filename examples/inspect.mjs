import { ethers } from "ethers";

const BlurSwapMarketRegistryABI = [
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "proxies",
                "type": "address[]"
            },
            {
                "internalType": "bool[]",
                "name": "isLibs",
                "type": "bool[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "proxy",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "isLib",
                "type": "bool"
            }
        ],
        "name": "addMarket",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "markets",
        "outputs": [
            {
                "internalType": "address",
                "name": "proxy",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "isLib",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "isActive",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "marketId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "newProxy",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "isLib",
                "type": "bool"
            }
        ],
        "name": "setMarketProxy",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "marketId",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "newStatus",
                "type": "bool"
            }
        ],
        "name": "setMarketStatus",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]
const provider = new ethers.providers.InfuraProvider()
// const balance = await provider.getBalance('0x33e0D28eF1c1727Ff8D31445Fa31D6a1B65717d0')
// console.log('haha', ethers.utils.formatEther(balance))

const contractBlurSwapMarketRegistry = new ethers.Contract('0x3a574baC669F3B1CB54b92cCBAefbAFd07054d96', BlurSwapMarketRegistryABI, provider)
const inter = contractBlurSwapMarketRegistry.interface
//inter.markets(0)

async function BlurSwapGetMarket(marketId, provider) {
    const contract = new ethers.Contract('0x3a574baC669F3B1CB54b92cCBAefbAFd07054d96', BlurSwapMarketRegistryABI, provider)
    const market = await contractBlurSwapMarketRegistry.functions.markets(marketId)
    return market

}
try {
    
    const marketId = 4
    const market0 = await BlurSwapGetMarket(marketId)
    //console.log(`lenths:${market0.length}, ${market0}`)
    console.log(`marketId: ${marketId}, proxy: ${market0.proxy}, isLib: ${market0.isLib},isActive: ${market0.isActive}`)
} catch(error) {
    console.log(`error catched , ${error}`)
    throw error
}




