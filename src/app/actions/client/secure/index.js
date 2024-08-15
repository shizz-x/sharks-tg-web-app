import createUser from '@/app/actions/client/secure/createUser'
import hero from '@/app/actions/client/secure/hero'
import balance from '@/app/actions/client/secure/balance'
import sharks from '@/app/actions/client/secure/sharks'
import levels from '@/app/actions/client/secure/levels'
import inventory from '@/app/actions/client/secure/inventory'
import delayList from '@/app/actions/client/secure/delayList'
import jobs from '@/app/actions/client/secure/jobs'
import getClaims from '@/app/actions/client/secure/getClaims'
import createClaim from '@/app/actions/client/secure/createClaim'
const actions = {
  createUser,
  hero,
  balance,
  sharks,
  levels,
  inventory,
  delayList,
  jobs,
  createClaim,
  getClaims,
}
export default actions
