import React from 'react';
import { useColorMode, Box, Button, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import ActiveSaleOrders from './ActiveSaleOrders';
import CompletedSaleOrders from './CompletedSaleOrders';
import CreateSaleOrderModal from '../components/CreateSaleOrderModal';

const SaleOrdersPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box p={4}>
      <Button onClick={toggleColorMode} mb={4}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <Tabs>
        <TabList>
          <Tab>Active Sale Orders</Tab>
          <Tab>Completed Sale Orders</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <ActiveSaleOrders />
          </TabPanel>
          <TabPanel>
            <CompletedSaleOrders />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <CreateSaleOrderModal />
    </Box>
  );
};

export default SaleOrdersPage;