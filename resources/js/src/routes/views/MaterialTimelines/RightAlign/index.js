import React from 'react';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import Box from '@material-ui/core/Box';
import { coremat } from '../../../../@fake-db';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import { JumboCard } from '../../../../@jumbo/components/Common';
import Timeline from '@material-ui/lab/Timeline';

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Material Timelines', link: '/material-timeline' },
  { label: 'Right Align Timeline', isActive: true },
];

const RightAlignTimeline = () => {
  const { timeline } = coremat;

  return (
    <PageContainer heading="Right Align Timeline" breadcrumbs={breadcrumbs}>
      <Timeline align="right">
        {timeline.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color={index % 2 === 0 ? 'primary' : 'secondary'}>{item.icon}</TimelineDot>
              {timeline.length > index + 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <JumboCard>
                <Box component="h2" fontSize={20} mt={0} mb={3}>
                  {item.title}
                </Box>
                <p>{item.description}</p>
              </JumboCard>
              <Box mt={2}>
                <CmtAvatar src={item.avatar} style={{ display: 'inline-block' }} />
                <Box component="p" mb={0} mt={2}>
                  {item.time}
                </Box>
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </PageContainer>
  );
};

export default RightAlignTimeline;
