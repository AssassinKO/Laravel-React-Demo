import React from 'react';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import Box from '@material-ui/core/Box';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import { coremat } from '../../../../@fake-db';
import TimelineItem from '@material-ui/lab/TimelineItem';
import { TimelineOppositeContent } from '@material-ui/lab';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import { JumboCard } from '../../../../@jumbo/components/Common';
import Timeline from '@material-ui/lab/Timeline';

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Material Timelines', link: '/material-timeline' },
  { label: 'Center With Icon', isActive: true },
];

const CenterWithIcon = () => {
  const { timeline } = coremat;

  return (
    <PageContainer heading="Center With Icon" breadcrumbs={breadcrumbs}>
      <Timeline align="alternate">
        {timeline.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <CmtAvatar src={item.avatar} style={{ display: 'inline-block' }} />
              <Box component="p" mb={0} mt={2}>
                {item.time}
              </Box>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: item.iconBG }}>{item.icon}</TimelineDot>
              {timeline.length > index + 1 && <TimelineConnector style={{ backgroundColor: item.iconBG }} />}
            </TimelineSeparator>
            <TimelineContent style={{ marginBottom: 20 }}>
              <JumboCard>
                <Box component="h2" fontSize={20} mt={0} mb={3}>
                  {item.title}
                </Box>
                <p>{item.description}</p>
              </JumboCard>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </PageContainer>
  );
};

export default CenterWithIcon;
