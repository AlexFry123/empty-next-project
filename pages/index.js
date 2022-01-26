import { NewsWithData } from '../components/server-components'
import { Skeletons, Page } from '../components/client-components'
import { Suspense } from 'react'

export default function Home() {

      return (
        <Page>
          <Suspense fallback={<Skeletons />}>
            <NewsWithData />
          </Suspense>
        </Page>
      )

}
