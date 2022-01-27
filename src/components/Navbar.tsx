import React, {useContext} from 'react';
import styled from '@emotion/styled';
import config from '@config/constants.json';
import {settingsContext} from '@stores/SettingsContext';
import {Flex, Paper, Spacer, Switch, Typography} from '@themestress/components';

const StyledNavbar = styled(Paper)`
  height: ${config.navHeight}px;
  z-index: ${({theme}) => theme.zIndex.navbar};
  border-bottom: 1px solid
    ${({theme}) => theme.palette.outline[theme.palette.mode]};
`;

export const Navbar = () => {
  const [settings, setSettings] = useContext(settingsContext);

  const darkMode = settings.mode === 'dark';

  const handleSwitchToggle = () => {
    setSettings(prev => ({
      ...prev,
      mode: darkMode ? 'light' : 'dark',
    }));
  };

  return (
    <StyledNavbar square elevation={0}>
      <Flex
        height="100%"
        row
        alignItems="center"
        paddingLeft={6}
        justifyContent="space-between"
      >
        <Typography
          variant="overline"
          fontSize="1.4rem"
          lineHeight=""
          margin={0}
        >
          Themestress
        </Typography>
        <Flex alignItems="center" marginRight={4}>
          <Typography>Dark Mode</Typography>
          <Spacer size="8px" />
          <Switch checked={darkMode} onChange={handleSwitchToggle} />
        </Flex>
      </Flex>
    </StyledNavbar>
  );
};
