/**
 * @jest-environment node
 */
import ganache from 'ganache-core'
import {
    setupWeb3 as setupWeb3Test,
    getAccounts,
} from '../testing-utils/web3Util'
import {deployCNS} from '@ensdomains/mock'
// import { getCNS, getNamehash } from '../ens'
import CNS,{getCnsAddress} from '../index.js'
import '../testing-utils/extendExpect'
import {ethers} from 'ethers'

describe('Blockchain tests', () => {
    beforeAll(async () => {
    }, 1000000)

    describe('Test contract and Web3 setup', () => {
        test('accounts exist', async () => {
            console.log(111)
            // let ensAddress = '0xec3133E740FcAc8AC7212078522E3Ee3FFde0903'
            let provider = new ethers.providers.JsonRpcProvider('https://evm.confluxrpc.com')
            let networkId = 1030
            const cns = new CNS({networkId, provider, ensAddress: getCnsAddress(networkId)})
            let address = await cns.name('honey.cfx').getAddress()
            let cfxAddress = await cns.name('conflux.cfx').getCfxAddress()
            console.log(address)
            console.log(cfxAddress)
        })
    })
})
