import api from './api'
import { ROUTER_URL } from './constants'
import type { TToolResponse } from './routerApi.types'

const ROUTER_URLS = {
  fetchToolsUrl: `${ROUTER_URL}v2/tools`
}
const fetchTools = async () => {
  const res = await api.get<TToolResponse>(ROUTER_URLS.fetchToolsUrl)
  return res.data.tools
}

export { fetchTools }
