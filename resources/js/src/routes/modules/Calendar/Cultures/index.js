import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import { Calendar, momentLocalizer } from 'react-big-calendar';

import moment from 'moment';
import 'moment/locale/es';
import 'moment/locale/fr';
import 'moment/locale/ar';
import 'moment/locale/en-gb';
import 'moment/locale/en-in';

import { calendarData } from '../../../../@fake-db';
import AppSelectBox from '../../../../@jumbo/components/Common/formElements/AppSelectBox';
import { makeStyles } from '@material-ui/core/styles';

const { events } = calendarData;
const today = new Date();
const currentYear = today.getFullYear();

const localizer = momentLocalizer(moment);

const cultures = [
  { id: 'en', title: 'en' },
  { id: 'en-GB', title: 'en-GB' },
  { id: 'es', title: 'es' },
  { id: 'fr', title: 'fr' },
  { id: 'ar-AE', title: 'ar-AE' },
];

const useStyles = makeStyles(theme => ({
  selectBoxRoot: {
    marginBottom: 20,
    '& .MuiOutlinedInput-input': {
      backgroundColor: theme.palette.background.paper,
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.grey[400],
    },
  },
}));

const CulturesCalendar = () => {
  const classes = useStyles();
  const [culture, setCulture] = useState('en');

  return (
    <PageContainer>
      <div className={classes.selectBoxRoot}>
        <Grid item xs={6} sm={4} md={3}>
          <AppSelectBox
            label="Select a Culture"
            variant="outlined"
            data={cultures}
            value={culture}
            onChange={event => setCulture(event.target.value)}
          />
        </Grid>
      </div>
      <Calendar localizer={localizer} events={events} culture={culture} defaultDate={new Date(currentYear, 3, 1)} />
    </PageContainer>
  );
};

export default CulturesCalendar;
