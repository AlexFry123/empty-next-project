import { Story } from '../client-components'
import { useData, fetchData, transform } from '../../lib'

export default function StoryWithData({ id }) {
  const data = useData(`s-${id}`, () => fetchData(`item/${id}`).then(transform))
  return <Story {...data} />
}