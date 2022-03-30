import React from 'react';
import {Route} from 'react-router';

// Component pages
import {AvatarPage} from '@pages/components/AvatarPage';
import {BackdropPage} from '@pages/components/BackdropPage';
import {ContainerPage} from '@pages/components/ContainerPage';
import {ContextMenuPage} from '@pages/components/ContextMenuPage';
import {DividerPage} from '@pages/components/DividerPage';
import {FlexPage} from '@pages/components/FlexPage';
import {IconPage} from '@pages/components/IconPage';
import {MenuPage} from '@pages/components/MenuPage';
import {MenuItemPage} from '@pages/components/MenuItemPage';
import {BasicDialogPage} from '@pages/components/BasicDialogPage';
import {NavigationRailPage} from '@pages/components/NavigationRailPage';
import {NavigationItemPage} from '@pages/components/NavigationItemPage';
import {NestedMenuItemPage} from '@pages/components/NestedMenuItemPage';
import {CardPage} from '@pages/components/CardPage';
import {RipplePage} from '@pages/components/RipplePage';
import {SliderPage} from '@pages/components/SliderPage';
import {SnackbarPage} from '@pages/components/SnackbarPage';
import {SpacerPage} from '@pages/components/SpacerPage';
import {SwitchPage} from '@pages/components/SwitchPage';
import {TypographyPage} from '@pages/components/TypographyPage';
import {TooltipPage} from '@pages/components/TooltipPage';
import {ElevatedButtonPage} from '@pages/components/ElevatedButtonPage';
import {FilledButtonPage} from '@pages/components/FilledButtonPage';
import {FilledTonalButtonPage} from '@pages/components/FilledTonalButtonPage';
import {OutlinedButtonPage} from '@pages/components/OutlinedButtonPage';
import {TextButtonPage} from '@pages/components/TextButtonPage';
import {FABPage} from '@pages/components/FABPage';
import {NavigationBarPage} from '@pages/components/NavigationBarPage';
import {FullscreenDialogPage} from '@pages/components/FullscreenDialogPage';
import {SelectPage} from '@pages/components/SelectPage';
import {TextFieldPage} from '@pages/components/TextFieldPage';

// System pages
import {GettingStartedPage} from '@pages/system/GettingStartedPage';
import {ThemeingPage} from '@pages/system/ThemeingPage';
import {TypesPage} from '@pages/system/TypesPage';
import {PalettePage} from '@pages/system/PalettePage';

import {Typography, NavigationItem} from '@themestress/components';

export const getPageFromRoute = (
  route: string,
): {name: string; page: React.ReactNode} => {
  let page = null;
  componentsRouteMap.forEach(section => {
    Object.entries(section.pages).forEach(([pageSlug, info]) => {
      const pageRoute = `/${section.route}/${pageSlug}`;
      if (route === pageRoute || route === pageRoute + '/') {
        page = info;
      }
    });
  });
  return page;
};

export const cleanRoute = (route: string) => {
  const splitPath = route.split('/');
  return splitPath.filter(v => !!v).join('/');
};

export const getRoutesList = () => {
  const routes: string[] = [];
  componentsRouteMap.forEach(section => {
    Object.keys(section.pages).forEach(key =>
      routes.push(`${section.route}/${key}`),
    );
  });
  return routes;
};

export const getMenuItems = (handleClick: (slug: string) => void) => {
  const items: React.ReactNode[] = [];
  componentsRouteMap.forEach(section => {
    items.push(
      <Typography weight={500} key={section.name}>
        {section.name}
      </Typography>,
    );

    Object.entries(section.pages).forEach(([pageSlug, info]) => {
      items.push(
        <NavigationItem
          key={pageSlug}
          onClick={() => handleClick(`${section.route}/${pageSlug}`)}
        >
          {info.name}
        </NavigationItem>,
      );
    });
  });
  return items;
};

export const createSectionRoutes = (section: string) => {
  const sectionObject = componentsRouteMap.filter(
    obj => obj.route === section,
  )[0];

  const routes: React.ReactNode[] = [];
  Object.entries(sectionObject.pages).forEach(([route, info]) => {
    routes.push(<Route key={route} path={route} element={info.page} />);
  });
  return routes;
};

export const componentsRouteMap = [
  {
    name: 'System',
    route: 'system',
    pages: {
      'getting-started': {
        name: 'Getting Started',
        page: <GettingStartedPage />,
      },
      themeing: {name: 'Themeing', page: <ThemeingPage />},
      palette: {name: 'Palette', page: <PalettePage />},
      types: {name: 'Types', page: <TypesPage />},
    },
  },
  {
    name: 'Components',
    route: 'components',
    pages: {
      avatar: {name: 'Avatar', page: <AvatarPage />},
      backdrop: {name: 'Backdrop', page: <BackdropPage />},
      card: {name: 'Card', page: <CardPage />},
      container: {name: 'Container', page: <ContainerPage />},
      contextmenu: {name: 'ContextMenu', page: <ContextMenuPage />},
      divider: {name: 'Divider', page: <DividerPage />},
      elevatedbutton: {name: 'ElevatedButton', page: <ElevatedButtonPage />},
      filledbutton: {name: 'FilledButton', page: <FilledButtonPage />},
      filledtonalbutton: {
        name: 'FilledTonalButton',
        page: <FilledTonalButtonPage />,
      },
      outlinedbutton: {name: 'OutlinedButton', page: <OutlinedButtonPage />},
      textbutton: {name: 'TextButton', page: <TextButtonPage />},
      fab: {name: 'FAB', page: <FABPage />},
      flex: {name: 'Flex', page: <FlexPage />},
      icon: {name: 'Icon', page: <IconPage />},
      menu: {name: 'Menu', page: <MenuPage />},
      menuitem: {name: 'MenuItem', page: <MenuItemPage />},
      nestedmenuitem: {name: 'NestedMenuItem', page: <NestedMenuItemPage />},
      basicdialog: {name: 'BasicDialog', page: <BasicDialogPage />},
      fullscreendialog: {
        name: 'FullscreenDialog',
        page: <FullscreenDialogPage />,
      },
      navigationbar: {name: 'NavigationBar', page: <NavigationBarPage />},
      navigationrail: {name: 'NavigationRail', page: <NavigationRailPage />},
      navigationitem: {name: 'NavigationItem', page: <NavigationItemPage />},
      ripple: {name: 'Ripple', page: <RipplePage />},
      select: {name: 'Select', page: <SelectPage />},
      slider: {name: 'Slider', page: <SliderPage />},
      snackbar: {name: 'Snackbar', page: <SnackbarPage />},
      spacer: {name: 'Spacer', page: <SpacerPage />},
      switch: {name: 'Switch', page: <SwitchPage />},
      textfield: {name: 'TextField', page: <TextFieldPage />},
      tooltip: {name: 'Tooltip', page: <TooltipPage />},
      typography: {name: 'Typography', page: <TypographyPage />},
    },
  },
];
