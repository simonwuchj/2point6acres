import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ColoredTabs(props) {
  const listOfTab = props.items.map((item) => 
    <Tab
      value={item.replace(/\s+/g, '-').toLowerCase()}
      label={item} />
  );

  const [value, setValue] = React.useState(props.items[0].replace(/\s+/g, '-').toLowerCase());
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // listOfTab[0].value

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        centered
      >
        {listOfTab}
      </Tabs>
    </Box>
  );
}
