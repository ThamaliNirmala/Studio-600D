import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import BirthDayList from './Collection/Views/BirthDayList';
import GoingAwayList from './Collection/Views/GoingAwayList';
import ModellingList from './Collection/Views/ModellingList';
import PreShootList from './Collection/Views/PreShootList';
import WeddingShootList from './Collection/Views/WeddingShootList';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "auto",
    position: "relative",
    minHeight: "auto"
  },
  
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="BirthDay" />
            <Tab label="GoingAway" />
            <Tab label="Modelling" />
            <Tab label="PreShoot" />
            <Tab label="WeddingShoot" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}><BirthDayList/></TabContainer>
          <TabContainer dir={theme.direction}><GoingAwayList/></TabContainer>
          <TabContainer dir={theme.direction}><ModellingList/></TabContainer>
          <TabContainer dir={theme.direction}><PreShootList/></TabContainer>
          <TabContainer dir={theme.direction}><WeddingShootList/></TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);