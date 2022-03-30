import React, {useEffect, useState} from 'react';
import {Outlet, useNavigate, useLocation} from 'react-router-dom';
import styled from '@emotion/styled';
import {cleanRoute, getMenuItems, getRoutesList} from '@core/routeMap';
import {Navbar} from '@components/Navbar';
import {
  NavigationRail,
  Surface,
  Flex,
  Spacer,
  Container,
} from '@themestress/components';

const StyledPage = styled(Surface)`
  height: calc(100vh - 60px);
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

const StyledScrollable = styled(Surface)`
  overflow: auto;
`;

const StyledMenuSurface = styled(Surface)`
  overflow: auto;
  background-image: var(--sys-overlay-level-1);
`;

export const Home = () => {
  const location = useLocation();
  const path = cleanRoute(location.pathname);
  const itemIndex = getRoutesList().findIndex(v => v === path);

  const [menuIndex, setMenuIndex] = useState(itemIndex);
  const navigate = useNavigate();

  const handleClick = (tab: string) => navigate(tab);

  // Set getting started as default page
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('system/getting-started');
    }
  }, [location.pathname]);

  return (
    <Flex column>
      <Navbar />
      <StyledPage>
        <StyledMenuSurface padding={6} bgColor="var(--sys-color-surface)">
          <NavigationRail
            selected={menuIndex}
            onTabChanged={i => setMenuIndex(i)}
          >
            <Spacer size={'220px'} />
            {getMenuItems(handleClick)}
          </NavigationRail>
        </StyledMenuSurface>

        <StyledScrollable
          width="100%"
          padding={10}
          bgColor="var(--sys-color-surface)"
        >
          <Container>
            <Outlet />
          </Container>
        </StyledScrollable>
      </StyledPage>
    </Flex>
  );
};
