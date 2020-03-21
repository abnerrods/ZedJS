import * as _ from 'lodash'
import { endpointsV4, IEndpoint } from '../../../endpoints/endpoints'
import { SummonerV4 } from '../../../models/summoner/summoner'
import { Regions } from '../../../constants'
import { FindSummonerBy } from '../../../constants/summoner'
import { BaseApiLol } from '../api/api.lol'

export class SummonerApi extends BaseApiLol {
  private parsePath (endpoint: IEndpoint, by: FindSummonerBy) {
    let { path } = endpoint
    if (by === FindSummonerBy.ID) {
      path = path.replace('/$(by)/', '/')
    }
    return path
  }
  private genericRequest (by: FindSummonerBy, value: string, region: Regions) {
    const endpoint = _.cloneDeep(endpointsV4.Summoner)
    endpoint.path = this.parsePath(endpoint, by)
    const params = {
      summonerName: value,
      by
    }
    return this.request<SummonerV4>(region, endpoint, params)
  }

  public async getByName (summonerName: string, region: Regions) {
    return this.genericRequest(FindSummonerBy.NAME, summonerName, region)
  }
  
  public async getById (id: string, region: Regions) {
    return this.genericRequest(FindSummonerBy.ID, id, region)
  }
  
  public async getByPUUID (puuid: string, region: Regions) {
    return this.genericRequest(FindSummonerBy.PUUID, puuid, region)
  }
  
  public async getByAccountID (accountId: string, region: Regions) {
    return this.genericRequest(FindSummonerBy.ACCOUNT_ID, accountId, region)
  }
}