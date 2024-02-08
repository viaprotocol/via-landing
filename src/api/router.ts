import { Via } from '@viaprotocol/router-sdk'

const DEFAULT_API_KEY = 'e3db93a3-ae1c-41e5-8229-b8c1ecef5683'
export const cli = new Via({ apiKey: DEFAULT_API_KEY, url: 'https://router-api.via.exchange', timeout: 30000 })

// const getLandingRoutes = async (): Promise<any> => {
//   const wsProvider = v.getRoutesViaWs({
//     fromAddress: '0xD75183E452d6915356814454D2D64Df149853D38',
//     fromAmount: 148875000000000000,
//     fromChainId: 56,
//     fromTokenAddress: '0x0000000000000000000000000000000000000000',
//     toTokenAddress: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
//     multiTx: true,
//   })

//   wsProvider.onmessage = function incoming(data) {
//     const res = JSON.parse(data.data as string)
//     let route: IRoute[]
//     let status: IRouteFetchStatus
//     if (Array.isArray(res)) {
//       route = res
//       console.log(route)
//     }
//     else {
//       status = res.status
//       console.log(status)

//       if (status.finished === status.all)
//         wsProvider.close()
//     }
//   }
// }
