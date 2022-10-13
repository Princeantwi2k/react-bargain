import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ItermList from './ItermList';
import AllItermList from './AllItemList';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='ItermTab'>
          <Tab label="All Iterms" {...a11yProps(0)} />
          <Tab label="Scheduled Auction(10)" {...a11yProps(1)} />
          <Tab label="Ongoing(200)" {...a11yProps(2)} />
          <Tab label="Cancelled Auction(3)" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className='tabpanel'>
            <div className='maintab'>
            <div className="dropdown ">
  <button className="btn btn-light dropdown-toggle itermBottom" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Filter  
  </button>
 
  <ul className="dropdown-menu">
    <li className="dropdownItem"><a className="dropdown-item" > Sign out</a></li>
    
  </ul>
</div>
        <form className="Itermform">
         <input type="text"  placeholder="Search items"  className="" />
        <button className='btn btn-default'>
        <i className="bi bi-search"></i>
        </button>
    
      </form>
            </div>
            <div className='subTab'> 
              <p >  <i className="bi bi-plus-lg"></i>Add New Category</p>
               <i className="bi bi-funnel"></i>
              <i className="bi bi-list-ul"></i>

                
            </div>
          
        </div>
        <div className="ItermMainBody">
       <AllItermList />
     </div>
    
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className='tabpanel'>
            <div className='maintab'>
            <div className="dropdown ">
  <button className="btn btn-light dropdown-toggle itermBottom" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Filter  
  </button>
 
  <ul className="dropdown-menu">
    <li className="dropdownItem"><a className="dropdown-item" > Sign out</a></li>
    
  </ul>
</div>
        <form className="Itermform">
         <input type="text"  placeholder="Search items"  className="" />
        <button className='btn btn-default'>
        <i className="bi bi-search"></i>
        </button>
    
      </form>
            </div>
            <div className='subTab'> 
              <p >  <i className="bi bi-plus-lg"></i>Add New Category</p>
               <i className="bi bi-funnel"></i>
              <i className="bi bi-list-ul"></i>

                
            </div>
          
        </div>
        <div className="ItermMainBody">
        <ItermList />
     </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </Box>
  );
}