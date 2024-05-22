import React from 'react'
import MaxWidthWrapper from './components/maxWidthWrapper'
import PageHeader from './components/pageHeader'
export default function Home() {
  return (
    <MaxWidthWrapper>
      <PageHeader title="Discover the Sweetness of Nature " subTitle="Discover Honeycomb Products that are as Unique as You. Sweeten Your Home with Nature's Best." primaryText="Unique Honey Products for Your Home" isHeaderButton={true} />
    </MaxWidthWrapper>
  )
}