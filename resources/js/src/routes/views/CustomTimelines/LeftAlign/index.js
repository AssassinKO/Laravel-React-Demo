import React from 'react';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import CmtTimeLine from '../../../../@coremat/CmtTimeLine';
import CmtTimeLineItem from '../../../../@coremat/CmtTimeLine/CmtTimeLineItem';
import CmtImage from '../../../../@coremat/CmtImage';
import CmtTimelineContent from '../../../../@coremat/CmtTimeLine/CmtTimelineContent';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import Box from '@material-ui/core/Box';
import { coremat } from '../../../../@fake-db';

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Custom Timelines', link: '/custom-timeline' },
  { label: 'Left Align Timeline', isActive: true },
];

const LeftAlignTimeline = () => {
  const { timeline } = coremat;

  return (
    <PageContainer heading="Left Align Timeline" breadcrumbs={breadcrumbs}>
      <CmtTimeLine align="left">
        {timeline.map((item, index) => (
          <CmtTimeLineItem
            key={index}
            head={
              <Box>
                <CmtAvatar src={item.avatar} />
                <Box component="p" mb={0} mt={2}>
                  {item.time}
                </Box>
              </Box>
            }
            point={<CmtImage src={item.point} alt={item.title} />}
            content={
              <CmtTimelineContent isWrapper={true}>
                <Box component="h2" fontSize={20} mt={0} mb={3}>
                  {item.title}
                </Box>
                <p>{item.description}</p>
              </CmtTimelineContent>
            }
          />
        ))}
      </CmtTimeLine>
    </PageContainer>
  );
};

export default LeftAlignTimeline;
