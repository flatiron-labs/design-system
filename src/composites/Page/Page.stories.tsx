import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Page } from '.'
import { Grid, Section, OverlayCard, FileCard, PageHeading } from '~/components'

import PinkOverlay from '~/assets/images/overlay-pink.svg'
import PurpleOverlay from '~/assets/images/overlay-purple.svg'
import TurqOverlay from '~/assets/images/overlay-turq.svg'

export default {
  title: 'Composites/Page'
} as Meta

const Template: Story = () => (
  <Page style={{ minHeight: '100vh', position: 'relative' }}>
    <PageHeading title="Welcome Back John Smith!" subtitle="Software Engineering" secondarySubtitle="Fall 2020" />

    <Section title="Links">
      <Grid container spacing={3}>
        <OverlayCard title="Try free courses" cta="View Pathwright" accent="pink" image={PinkOverlay} />
        <OverlayCard title="Course work & Curriculum" cta="View Canvas" accent="turq" image={TurqOverlay} />
        <OverlayCard title="Access Career Services" cta="View Gradleaders" accent="purple" image={PurpleOverlay} />
      </Grid>
    </Section>

    <Section title="Documents">
      <Grid container>
        <FileCard
          type="Resume"
          title="title_of_resume.pdf"
          cta="View"
          secondaryTitle="Assigned"
          secondaryDescription="1/2/2233"
          tertiaryTitle="Completed"
          tertiaryDescription="1/2/2233"
          onClick={() => null}
        />
        <FileCard
          type="Resume"
          cta="Upload"
          secondaryTitle="Assigned"
          secondaryDescription="1/2/2233"
          onClick={() => null}
        />
        <FileCard
          type="Resume"
          title="title_of_resume.pdf"
          cta="View"
          secondaryTitle="Assigned"
          secondaryDescription="1/2/2233"
          tertiaryTitle="Completed"
          tertiaryDescription="1/2/2233"
          onClick={() => null}
        />
      </Grid>
    </Section>
  </Page>
)

export const Default = Template.bind({})
