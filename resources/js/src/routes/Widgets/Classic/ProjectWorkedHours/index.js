import React, { useState } from 'react';
import CmtBackDrop from '../../../../@coremat/CmtBackDrop';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Box from '@material-ui/core/Box';
import { classicWidget } from '../../../../@fake-db';
import AppDatePicker from '../../../../@jumbo/components/Common/formElements/AppDatePicker';
import ProjectWorkedGraph from './ProjectWorkedGraph';
import AppSelectBox from '../../../../@jumbo/components/Common/formElements/AppSelectBox';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import { getFormattedDate } from '../../../../@jumbo/utils/dateHelper';
import { alpha, makeStyles } from '@material-ui/core/styles';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles(theme => ({
  headerItem: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
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
  subHeaderBottom: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

const ProjectSwitcher = ({ currentProject, setCurrentProject, startDate, setStartDate, endDate, setEndDate }) => {
  const handleProjectChange = event => {
    setCurrentProject(classicWidget.projects.find(project => project.value === event.target.value));
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
          data={classicWidget.projects}
          valueKey="value"
          labelKey="label"
          value={currentProject.value}
          onChange={handleProjectChange}
        />
        <AppDatePicker label="Start Date" value={startDate} onChange={onStartDateChange} />
        <AppDatePicker label="End Date" value={endDate} onChange={onEndDateChange} />
      </Box>
    </CmtCardContent>
  );
};

const ProjectHeader = ({ startDate, endDate }) => {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center" mx={{ xs: -2, sm: -4 }}>
      <Box className={classes.headerItem}>Projects</Box>
      <Box className={classes.headerItem}>
        <CalendarTodayIcon />
        {getFormattedDate(startDate, ' DD MMM')} - {getFormattedDate(endDate, ' DD MMM')}
      </Box>
    </Box>
  );
};

const ProjectWorkedHours = () => {
  const classes = useStyles();
  const [currentProject, setCurrentProject] = React.useState(classicWidget.projects[0]);
  const [startDate, setStartDate] = React.useState('2020-07-03');
  const [endDate, setEndDate] = React.useState('2020-08-20');
  const [revealed, setRevealed] = useState(false);

  const handleOnRevealed = status => {
    setRevealed(status);
  };

  const resetWidget = () => {
    setCurrentProject(classicWidget.projects[0]);
  };

  return (
    <CmtBackDrop
      concealedIcon={<DeveloperBoardIcon />}
      extrasContainer={<RefreshIcon className="pointer" onClick={resetWidget} />}
      backLayerConcealed={
        revealed ? '' : <ProjectHeader currentProject={currentProject} startDate={startDate} endDate={endDate} />
      }
      backLayerRevealed={
        <ProjectSwitcher
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      }
      onRevealed={handleOnRevealed}>
      <Box p={6}>
        <Box>{currentProject.label}</Box>
        <Box className={classes.subHeaderBottom}>
          <Box>
            {getFormattedDate(startDate, ' DD MMM')} - {getFormattedDate(endDate, ' DD MMM')}
          </Box>

          <Box component="span" fontSize={14} color="primary.main">
            52 Hours
          </Box>
        </Box>
      </Box>
      <ProjectWorkedGraph
        data={currentProject.data}
        color={currentProject.color}
        backgroundColor={currentProject.backgroundColor}
      />
    </CmtBackDrop>
  );
};

export default ProjectWorkedHours;
