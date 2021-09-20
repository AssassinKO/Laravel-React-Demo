import React, { useState } from 'react';

import CmtBackDrop from '../../../../@coremat/CmtBackDrop';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Box from '@material-ui/core/Box';
import { intranet } from '../../../../@fake-db';
import AppDatePicker from '../../../../@jumbo/components/Common/formElements/AppDatePicker';
import ProjectWorkedGraph from './ProjectWorkedGraph';
import AppSelectBox from '../../../../@jumbo/components/Common/formElements/AppSelectBox';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import { getFormattedDate } from '../../../../@jumbo/utils/dateHelper';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CmtImage from '../../../../@coremat/CmtImage';

const useStyles = makeStyles(theme => ({
  headerItem: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    [theme.breakpoints.down('xs')]: {
      fontSize: 13,
      paddingLeft: 8,
      paddingRight: 8,
    },
    color: alpha(theme.palette.common.white, 0.74),
    '&:not(:first-child)': {
      borderLeft: `1px solid ${alpha(theme.palette.common.white, 0.8)}`,
    },
    '& .MuiSvgIcon-root': {
      marginRight: 12,
    },
  },
  backdropContent: {
    color: alpha(theme.palette.common.white, 0.74),
    '& .form-control': {
      marginBottom: 20,
      '& label, & .MuiInput-formControl, & .MuiSelect-icon, & .MuiIconButton-root': {
        color: alpha(theme.palette.common.white, 0.74),
      },
      '& .MuiInput-underline:before, & .MuiInput-underline:after': {
        borderBottomColor: alpha(theme.palette.common.white, 0.74),
      },
    },
  },
}));

const Project = ({ currentProject, setCurrentProject, startDate, setStartDate, endDate, setEndDate }) => {
  const handleChange = event => {
    setCurrentProject(intranet.projects.find(project => project.value === event.target.value));
  };

  const onStartDateChange = date => {
    setStartDate(date);
  };

  const onEndDateChange = date => {
    setEndDate(date);
  };
  const classes = useStyles();

  return (
    <CmtCardContent>
      <Box className={classes.backdropContent}>
        <AppSelectBox
          label="Select Project"
          data={intranet.projects}
          valueKey="value"
          labelKey="label"
          value={currentProject.value}
          onChange={handleChange}
        />
        <AppDatePicker label="Start Date" value={startDate} onChange={onStartDateChange} />
        <AppDatePicker label="End Date" value={endDate} onChange={onEndDateChange} />
      </Box>
    </CmtCardContent>
  );
};

const ProjectHeader = ({ currentProject, startDate, endDate }) => {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center" mx={{ xs: -2, sm: -4 }}>
      <Box className={classes.headerItem}>
        <DashboardIcon />
        {currentProject.label}
      </Box>
      <Box className={classes.headerItem}>
        <CalendarTodayIcon />
        {getFormattedDate(startDate, ' DD MMM')} - {getFormattedDate(endDate, ' DD MMM')}
      </Box>
    </Box>
  );
};

const ProjectWorkedHours = () => {
  const [currentProject, setCurrentProject] = React.useState(intranet.projects[0]);
  const [startDate, setStartDate] = React.useState('2020-07-03');
  const [endDate, setEndDate] = React.useState('2020-08-20');
  const [revealed, setRevealed] = useState(false);

  const handleOnRevealed = status => {
    setRevealed(status);
  };

  return (
    <CmtBackDrop
      concealedIcon={<CmtImage src={'/images/icons/filter_icon.png'} alt="filter" />}
      backLayerConcealed={
        revealed ? '' : <ProjectHeader currentProject={currentProject} startDate={startDate} endDate={endDate} />
      }
      backLayerRevealed={
        <Project
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      }
      onRevealed={handleOnRevealed}>
      <Box display="flex" alignItems="center" p={{ xs: 4, lg: 6, xl: 8 }}>
        <Box>
          <Box display="flex" alignItems="baseline">
            <Typography component="div" variant="h1">
              {currentProject.totalHours}
            </Typography>
            <Box component="span" fontSize={14} color="text.secondary" ml={2}>
              Hours
            </Box>
          </Box>
          <Box component="span" fontSize={12} color="text.secondary">
            Total
          </Box>
        </Box>

        <Box pl={{ xs: 4, lg: 6, xl: 8 }}>
          <Box display="flex" alignItems="baseline">
            <Typography component="div" variant="h1">
              {currentProject.dailyAverageHours}
            </Typography>
            <Box component="span" fontSize={14} color="text.secondary" ml={2}>
              Hours
            </Box>
          </Box>
          <Box component="span" fontSize={12} color="text.secondary">
            Daily Average
          </Box>
        </Box>
      </Box>
      <ProjectWorkedGraph data={currentProject.data} color={currentProject.color} />
    </CmtBackDrop>
  );
};

export default ProjectWorkedHours;
