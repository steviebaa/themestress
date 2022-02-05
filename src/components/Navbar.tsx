import React, {useContext} from 'react';
import styled from '@emotion/styled';
import config from '@config/constants.json';
import {settingsContext} from '@stores/SettingsContext';
import {
  Flex,
  Surface,
  Spacer,
  Switch,
  Typography,
} from '@themestress/components';

const StyledNavbar = styled(Surface)`
  height: ${config.navHeight}px;
  z-index: var(--sys-z-index-navbar);
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
    <StyledNavbar variant="filled">
      <Flex
        height="100%"
        row
        alignItems="center"
        paddingLeft={6}
        justifyContent="space-between"
      >
        <Typography variant="headline-small" element="span" margin={0}>
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
