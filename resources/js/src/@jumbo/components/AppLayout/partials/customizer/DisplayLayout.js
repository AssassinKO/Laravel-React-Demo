import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import CmtGridView from '../../../../../@coremat/CmtGridView';
import CmtImage from '../../../../../@coremat/CmtImage';
import CmtCard from '../../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../../@coremat/CmtCard/CmtCardContent';
import { CONTAINER_OPTIONS } from '../../../../constants/CustomizerOptions';
import LayoutContext from '../../../../../@coremat/CmtLayouts/LayoutContext';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    '& .Cmt-header-root': {
      padding: 16,
    },
    '& .Cmt-card-content': {
      padding: 16,
    },
  },
  checkIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fill: theme.palette.success.main,
  },
}));

const DisplayLayout = () => {
  const classes = useStyles();
  const { layoutStyle, setLayoutStyle } = useContext(LayoutContext);

  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader title="Container Setting" />
      <CmtCardContent>
        <CmtGridView
          itemPadding={16}
          data={CONTAINER_OPTIONS}
          renderRow={(item, index) => (
            <div key={index} className="pointer" onClick={() => setLayoutStyle(item.id)}>
              <div style={{ position: 'relative' }}>
                <CmtImage src={item.image} alt={item.layoutName} />
                {item.id === layoutStyle && <CheckCircleIcon className={classes.checkIcon} />}
              </div>
              <div className="mt-2">{item.layoutName}</div>
            </div>
          )}
        />
      </CmtCardContent>
    </CmtCard>
  );
};

export default DisplayLayout;
