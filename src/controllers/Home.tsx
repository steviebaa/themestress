import React, {useState} from 'react';
import {Outlet, useNavigate, useLocation} from 'react-router-dom';
import styled from '@emotion/styled';
import {cleanRoute, getMenuItems, getRoutesList} from '@core/routeMap';
import config from '@config/constants.json';
import {Navbar} from '@components/Navbar';
import {SideNav, Paper, Flex, Spacer, Container} from '@themestress/components';

const Page = styled(Paper)`
  height: calc(100vh - ${config.navHeight}px);
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

const Scrollable = styled(Flex)`
  overflow: auto;
`;

const MenuPaper = styled(Paper)`
  overflow: auto;
`;

export const Home = () => {
  const location = useLocation();
  const path = cleanRoute(location.pathname);
  const itemIndex = getRoutesList().findIndex(v => v === path);

  const [menuIndex, setMenuIndex] = useState(itemIndex);
  const navigate = useNavigate();

  const handleClick = (tab: string) => navigate(tab);

  return (
    <Flex column>
      <Navbar />
      <Page square>
        <MenuPaper padding={2} elevation={1} square>
          <SideNav selected={menuIndex} onTabChanged={i => setMenuIndex(i)}>
            <Spacer size={'220px'} />
            {getMenuItems(handleClick)}
          </SideNav>
        </MenuPaper>

        <Scrollable column width="100%">
          <Container maxWidth="md">
            <Outlet />
          </Container>
        </Scrollable>
      </Page>
    </Flex>
  );
};
