import React, { lazy, Suspense } from 'react'
import { Router } from '@reach/router'
import Spinner from '../components/shared/Spinner'

// Lazy load pages
const AnalogClockPage = lazy(() => import('../pages/AnalogClockPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))

const Routes = (): JSX.Element => {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <AnalogClockPage path='/' />
        <NotFoundPage default />
      </Router>
    </Suspense>
  )
}

export default Routes
