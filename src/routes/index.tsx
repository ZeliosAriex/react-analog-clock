import React, { lazy, Suspense } from 'react'
import { Router } from '@reach/router'

/* Lazy load pages */
const AnalogClockPage = lazy(() => import('../pages/AnalogClockPage'))

const Routes = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Is Loading...</div>}>
      <Router>
        <AnalogClockPage path='/' />
      </Router>
    </Suspense>
  )
}

export default Routes
