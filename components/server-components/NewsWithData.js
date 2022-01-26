import StoryWithData from './StoryWithData'
import { useData, fetchData } from '../../lib'

export default function NewsWithData() {
    const storyIds = useData('top', () => fetchData('topstories'))
    return (
      <>
        {storyIds.slice(0, 30).map((id) => {
          return <StoryWithData id={id} key={id} />
        })}
      </>
    )
}