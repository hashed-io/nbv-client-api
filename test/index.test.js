// const PolkadotApi = require('../src/model/polkadotApi')
const ConfidentialDocs = require('../src/model/confidentialDocs')
global.window = { addEventListener () {} }
global.File = class {}
// const { NbvStorageApi } = require('../src/model/polkadot-pallets')

jest.setTimeout(40000)
// let polkadotApi
// let nbvStorageApi
let confidentialDocs

beforeEach(async () => {
  confidentialDocs = new ConfidentialDocs({
    ipfsURL: process.env.IPFS_URL,
    ipfsAuthHeader: `Basic ${Buffer.from(`${process.env.IPFS_PROJECT_ID}:${process.env.IPFS_PROJECT_SECRET}`).toString('base64')}`,
    chainURI: process.env.WSS,
    appName: process.env.APP_NAME,
    signer: process.env.SIGNER
  })
  await confidentialDocs.init()
})

describe('Connect with hashedChain', () => {
  test('Create ConfidentialDocs instance', async () => {
    expect(confidentialDocs).toBeDefined()
  })
  // test('Create NbvStorageApi instance', async () => {
  //   nbvStorageApi = new NbvStorageApi(polkadotApi)
  //   expect(nbvStorageApi).toBeDefined()
  // })
})
