import React from 'react';
import { Grid } from '@material-ui/core';
import GridContainer from '../../../@jumbo/components/GridContainer';
import UserSummery from './UserSummery';
import UserSummery2 from './UserSummery2';
import IncrementUsers from './IncrementUsers';
import CampaignCard from './CampaignCard';
import NewsLatterSubscription from './NewsLatterSubscription';
import NewPhotos from './NewPhotos';
import FlyingBird from './FlyingBird';
import GoogleNest from './GoogleNest';
import GooglePixel from './GooglePixel';
import AyurvedaCard from './AyurvedaCard';
import LogoCard from './LogoCard';
import InfoCard from './InfoCard';
import PhotosCard from './PhotoCard';
import UnreadMessages from './UnreadMessages';
import WorkStatus from './WorkStatus';
import LogoCard2 from './LogoCard2';
import PlayerCard from './PlayerCard';
import ProjectCard from './ProjectCard';
import UserCard from './UserCard';
import SocialMedia from './SocialMedia';
import RoadMap from './RoadMap';
import FriendshipCard from './FriendShipCard';
import UIDesign from './UIDesign';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Widgets', link: '/widgets' },
  { label: 'Modern', isActive: true },
];

const Modern = () => {
  return (
    <PageContainer heading="Modern Widgets" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12} md={6} xl={3}>
          <UserSummery />
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <IncrementUsers />
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <UserSummery2 />
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <CampaignCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <NewsLatterSubscription />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <NewPhotos />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FlyingBird />
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={2}>
          <GoogleNest />
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={2}>
          <GooglePixel />
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={2}>
          <AyurvedaCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={2}>
          <GridContainer>
            <Grid item xs={6}>
              <LogoCard
                data={{
                  logo: '/images/dashboard/icon-google_drive.png',
                  name: '25/100gb',
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <LogoCard
                data={{
                  logo: '/images/dashboard/icon-dropbox.png',
                  name: '250/1tb',
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <InfoCard
                data={{
                  image: '/images/dashboard/icon-smart-home.png',
                  desc: 'Smart home on iPad with smart kids',
                }}
              />
            </Grid>
          </GridContainer>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={2}>
          <GridContainer>
            <Grid item xs={12}>
              <PhotosCard />
            </Grid>
            <Grid item xs={12}>
              <UnreadMessages />
            </Grid>
          </GridContainer>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={2}>
          <GridContainer>
            <Grid item xs={12}>
              <WorkStatus />
            </Grid>
            <Grid item xs={6}>
              <LogoCard2
                data={{
                  image: '/images/dashboard/iocn-gas-station.png',
                  distance: '3km',
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <PlayerCard />
            </Grid>
          </GridContainer>
        </Grid>
        <Grid item xs={12} sm={6} xl={3}>
          <ProjectCard />
        </Grid>
        <Grid item xs={12} sm={6} xl={3}>
          <UserCard />
        </Grid>
        <Grid item xs={12} sm={6} xl={3}>
          <SocialMedia />
        </Grid>
        <Grid item xs={12} sm={12} md={6} xl={3}>
          <RoadMap />
        </Grid>
        <Grid item xs={12} xl={6}>
          <UIDesign />
        </Grid>
        <Grid item xs={12} xl={6}>
          <FriendshipCard />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Modern;
