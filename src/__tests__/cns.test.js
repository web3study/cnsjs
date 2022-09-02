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
            let ensAddress = '0xD0eda7416C106C83E16f774aEeC225cD9f662F7F'
            let provider = new ethers.providers.JsonRpcProvider('https://evmtestnet.confluxrpc.com')
            let networkId = 71
            const cns = new CNS({networkId, provider, ensAddress: getCnsAddress(71)})
            let address = await cns.name('rrr.cfx').getAddress()
            console.log(address)
        })
    })
})
