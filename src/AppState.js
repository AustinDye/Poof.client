import { reactive } from 'vue'
import { data } from './data'
import { Groomer } from './Model/Groomer'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  groomers: data.groomers.map((g) => {
    return new Groomer(g)
  }),
  reviews: data.reviews
})


