import { reactive } from 'vue'
import { data } from './data'
import { Groomer } from './Model/Groomer'

const groomers = data.groomers.map((g) => {
  return new Groomer(g)
})
const owners = data.owners.map((o) => {
  return new Groomer(o)
})

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  groomers: groomers,
  owners: owners,
  staff: [...owners, ...groomers],
  reviews: data.reviews
})


