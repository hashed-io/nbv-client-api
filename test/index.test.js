const PolkadotApi = require('../src/model/polkadotApi')
const { NbvStorageApi } = require('../src/model/polkadot-pallets')
const ConfidentialDocs = require('./confidentialDocs')

jest.setTimeout(40000)
let polkadotApi
let nbvStorageApi
let confidentialDocs

describe('Connect with hashedChain', () => {
  test('Create PolkadotApi instance', async () => {
    polkadotApi = new PolkadotApi(
      {
        chainURI: 'wss://n1.hashed.systems',
        appName: 'Hashed test',
      }
    )
    await polkadotApi.connect()
    expect(polkadotApi !== undefined)
  })
  test('Create NbvStorageApi instance', async () => {
    nbvStorageApi = new NbvStorageApi(polkadotApi)
    expect(nbvStorageApi).toBeDefined()
  })
  test('Create ConfidentialDocs instance', async () => {
    console.log('env configs', {
      ipfsURL: process.env.IPFS_URL,
      ipfsAuthHeader: `Basic ${Buffer.from(`${process.env.IPFS_PROJECT_ID}:${process.env.IPFS_PROJECT_SECRET}`).toString('base64')}`,
      chainURI: process.env.WSS,
      appName: process.env.APP_NAME,
      signer: process.env.SIGNER
    })
    // confidentialDocs = new ConfidentialDocs({
    //   ipfsURL: process.env.IPFS_URL,
    //   ipfsAuthHeader,
    //   chainURI: process.env.WSS,
    //   appName: process.env.APP_NAME,
    //   signer: process.env.SIGNER
    // })
    // expect(confidentialDocs).toBeDefined()
  })

})
