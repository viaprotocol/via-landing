const VIA_SDK_SNIPPET =
`import { Via } from '@viaprotocol/router-sdk'

const DEFAULT_API_KEY = 'e3db93a3-ae1c-41e5-8229-b8c1ecef5583'

const via = new Via({
  apiKey: DEFAULT_API_KEY,
  url: 'https://router-api.via.exchange',
  timeout: 30000
})

// Get the best routes
const pagesNum = await via.routesPages()
const routeParams = {
  fromChainId: 1,
  fromTokenAddress: '0x0000000000000000000000000000000000000000',
  fromAmount: Math.pow(10, 18),
  toChainId: 56,
  toTokenAddress: '0x0000000000000000000000000000000000000000',
  fromAddress: '0x856cc59aaE47997a1C8D5472Fc8dfef27821235d', // might be null
  multiTx: false, // routes with multiple user transactions
  limit: 1,
}

const params = [...Array(pagesNum)].map(
  (_, i) => ({
    ...routeParams,
      offset: i+1
  })
)

const routes = await Promise.allSettled(
  params.map(i => via.getRoutes(i))
)
`

export { VIA_SDK_SNIPPET }
