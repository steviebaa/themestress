import React, {useState} from 'react';
import {Outlet, useNavigate, useLocation} from 'react-router-dom';
import styled from '@emotion/styled';
import {cleanRoute, getMenuItems, getRoutesList} from '@core/routeMap';
import config from '@config/constants.json';
import {Navbar} from '@components/Navbar';
import {
  NavigationRail,
  Surface,
  Flex,
  Spacer,
  Container,
} from '@themestress/components';

const Page = styled(Surface)`
  height: calc(100vh - ${config.navHeight}px);
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

const Scrollable = styled(Surface)`
  overflow: auto;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

const MenuSurface = styled(Surface)`
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
      <Page>
        <MenuSurface padding={6} variant="filled">
          <NavigationRail
            selected={menuIndex}
            onTabChanged={i => setMenuIndex(i)}
          >
            <Spacer size={'220px'} />
            {getMenuItems(handleClick)}
          </NavigationRail>
        </MenuSurface>

        <Scrollable width="lg" padding={10} bgColor="var(--sys-color-surface)">
          <Container maxWidth="md">
            <Outlet />
          </Container>
        </Scrollable>
      </Page>
    </Flex>
  );
};
