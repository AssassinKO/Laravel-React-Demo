import React from 'react';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import CmtTimeLineItem from '../../../../@coremat/CmtTimeLine/CmtTimeLineItem';
import Box from '@material-ui/core/Box';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import CmtTimelineContent from '../../../../@coremat/CmtTimeLine/CmtTimelineContent';
import CmtTimeLine from '../../../../@coremat/CmtTimeLine';
import { coremat } from '../../../../@fake-db';

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Custom Timelines', link: '/custom-timeline' },
  { label: 'Center With Icon', isActive: true },
];

const CenterWithIcon = () => {
  const { timeline } = coremat;

  return (
    <PageContainer heading="Center With Icon" breadcrumbs={breadcrumbs}>
      <CmtTimeLine align="center">
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
            point={<CmtAvatar color={item.iconBG}>{item.icon}</CmtAvatar>}
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

export default CenterWithIcon;
