export const samples = {
  theming: {},
  avatar: {
    overview: `export const ProfilePicture = () => {
  return (
    <>
      <Avatar noPulse statusColor={['error', 'main']} />
      <Avatar src="https://www.placecage.com/c/460/300" noStatus />
      <Avatar alt="Nicolas Cage" borderColor={'grey'} />
    </>
  )
}`,
  },
  backdrop: {
    overview: `export const ExclusiveOfferBackdrop = () => {
  const [open, setOpen] = useState(false)

  const toggleBackdrop = () => setOpen(prev => !prev)

  return (
    <>
      <Button variant="contained" onClick={toggleBackdrop}>
        Open Backdrop
      </Button>

      <Backdrop open={open} onClick={toggleBackdrop} bgColor={'rgb(0,0,0,0.8)'}>
        Optional content here
      </Backdrop>
    </>
  )
}`,
  },
  button: {
    overview: '<Button>Button</Button>',
    variant: `<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="text">Text</Button>`,
    icon: `<Button variant="outlined" padding={1}>
  <CheckRounded fill={['primary', 'main']} />
</Button>`,
  },
  card: {
    overview: `<Card variant="outlined">
	Card with variant="outlined"
</Card>`,
    elevation: `<Card padding={3} elevation={3}>
	Card with elevation={3}
</Card>`,
  },
  container: {
    overview: '<Container maxWidth="xs">Container</Container>',
  },
  contextmenu: {
    overview: `<ContextMenu
  width="100px"
  items={[
    <MenuItem key={'a'} onClick={handleClick}>Open</MenuItem>,
    <MenuItem key={'b'} onClick={handleClick}>Save</MenuItem>,
  ]}
>
  <Card variant="outlined">
      Right Click Me!
  </Card>

  <Card
    variant="outlined"
    onContextMenu={() =>
      snackbar.queue({
        content: 'The existing onContextMenu function was also called!',
        variant: 'info',
      })
    }
  >
    I already have an onContextMenu prop.
  </Card>
</ContextMenu>`,
  },
  divider: {
    overview: `<Divider vertical weight={2} bgColor={["primary", "main"]} />`,
  },
  flex: {
    overview: `<Flex column />`,
  },
  icon: {
    overview: `<Icon size="lg" fill={['warning', 'main']}>
  <path d="m6.05 4.14-.39-.39c-.39-.39-1.02-.38-1.4 0l-.01.01c-.39.39-.39 1.02 0 1.4l.39.39c.39.39 1.01.39 1.4 0l.01-.01c.39-.38.39-1.02 0-1.4zM3.01 10.5H1.99c-.55 0-.99.44-.99.99v.01c0 .55.44.99.99.99H3c.56.01 1-.43 1-.98v-.01c0-.56-.44-1-.99-1zm9-9.95H12c-.56 0-1 .44-1 .99v.96c0 .55.44.99.99.99H12c.56.01 1-.43 1-.98v-.97c0-.55-.44-.99-.99-.99zm7.74 3.21c-.39-.39-1.02-.39-1.41-.01l-.39.39c-.39.39-.39 1.02 0 1.4l.01.01c.39.39 1.02.39 1.4 0l.39-.39c.39-.39.39-1.01 0-1.4zm-1.81 15.1.39.39c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-.39-.39c-.39-.39-1.02-.38-1.4 0-.4.4-.4 1.02-.01 1.41zM20 11.49v.01c0 .55.44.99.99.99H22c.55 0 .99-.44.99-.99v-.01c0-.55-.44-.99-.99-.99h-1.01c-.55 0-.99.44-.99.99zM12 5.5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-.01 16.95H12c.55 0 .99-.44.99-.99v-.96c0-.55-.44-.99-.99-.99h-.01c-.55 0-.99.44-.99.99v.96c0 .55.44.99.99.99zm-7.74-3.21c.39.39 1.02.39 1.41 0l.39-.39c.39-.39.38-1.02 0-1.4l-.01-.01a.9959.9959 0 0 0-1.41 0l-.39.39c-.38.4-.38 1.02.01 1.41z"></path>
</Icon>`,
  },
  menu: {
    overview: `const FileMenu = () => {
  const [open, setOpen] = useState(false)
  const anchorElRef = useRef(null)

  const toggleMenu = () => setOpen(prev => !prev)

  return (
    <>
      <Menu open={open} onClose={toggleMenu} anchorElement={anchorElRef}>
        <MenuItem>New File</MenuItem>
      </Menu>
			
      <Button variant="outlined" ref={anchorElRef} onClick={toggleMenu}>
        Open Menu
      </Button>
    </>
  )
}`,
    transform: `<>
  <Menu
    open={open}
    onClose={toggleMenu}
    anchorElement={anchorElRef}
    anchorOrigin={{vertical: 'top', horizontal: 'right'}}
    transformOrigin={{vertical: 'top', horizontal: 'center'}}
  >
    <MenuItem>New File</MenuItem>
  </Menu>
  <Button variant="outlined" ref={anchorElRef} onClick={toggleMenu}>
    Transform Position
  </Button>
</>`,
    positionOverride: `<>
  <Menu
    open={open}
    onClose={toggleMenu}
    anchorElement={anchorElRef}
    positionOverride={{x: 200, y: 200}}
  >
    <MenuItem>New File</MenuItem>
  </Menu>
  <Button variant="outlined" ref={anchorElRef} onClick={toggleMenu}>
    Position Override
  </Button>
</>`,
  },
  menuitem: {
    overview: `<MenuItem onClick={handleClick}>New File</MenuItem>`,
  },
  nestedmenuitem: {
    overview: `const FileMenu = () => {
  const [open, setOpen] = useState(false)
  const anchorElRef = useRef(null)

  const toggleMenu = () => setOpen(prev => !prev)

  return (
    <>
      <Menu open={open} onClose={toggleMenu} anchorElement={anchorElRef}>
        <MenuItem>New File</MenuItem>
        <NestedMenuItem content="Save As">
          <MenuItem>PNG</MenuItem>
          <MenuItem>SVG</MenuItem>
        </NestedMenuItem>
      </Menu>

      <Button variant="outlined" ref={anchorElRef} onClick={toggleMenu}>
        Open Menu
      </Button>
    </>
  )
}`,
  },
  navigationrail: {
    overview: `export const SideMenu = () => {
  const [selected, setSelected] = useState(0)

  return (
    <NavigationRail selected={selected} onTabChanged={i => setSelected(i)}>
      <Typography>Overview</Typography>
      <NavigationItem>Dashboard</NavigationItem>

      <Typography>Reports</Typography>
      <NavigationItem>Annual</NavigationItem>
      <NavigationItem>Monthly</NavigationItem>

      <Typography>Settings</Typography>
      <NavigationItem>Account</NavigationItem>
    </NavigationRail>
  )
}`,
  },
  navigationitem: {
    overview: `<NavigationItem>Dashboard</NavigationItem>`,
  },
  modal: {
    overview: `export const ChangePayment = () => {
  const [open, setOpen] = useState(false)
  const toggleModal = () => setOpen(prev => !prev)
  const snackbar = useSnackbar()

  return (
    <>
      <Button variant="contained" onClick={toggleModal}>
        Change Plan
      </Button>

      <Modal open={open} onClickAway={toggleModal} width={'xs'}>
        <Flex column>
          <Typography variant="h5" margin={4}>
            Change Plan
          </Typography>

          <Divider margin={0} />

          <Typography fontSize="16px" margin={4}>
            Are you sure you want to update you plan details?
          </Typography>

          <Flex justifyContent="flex-end">
            <Button
              onClick={() => {
                toggleModal()
                snackbar.queue({
                  content: 'Details updated 🎉',
                  variant: 'success',
                })
              }}
              variant="contained"
              margin={2}
              marginRight={0}
            >
              Confirm
            </Button>

            <Button onClick={() => toggleModal()} variant="outlined" margin={2}>
              Cancel
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </>
  )
}`,
  },
  ripple: {
    overview: `<div>
  <Ripple />
  <span>Click here</span>
</div>`,
  },
  slider: {
    overview: `export const VolumeController = () => {
  const [value, setValue] = useState(50)

  const handleCommit = (value: number) => {
    console.log('Slider committed value:', value)
  }

  return (
    <Slider
      value={value}
      onChange={v => setValue(v)}
      onChangeCommitted={handleCommit}
    />
  )
}`,
    range: `<Slider
  min={0}
  max={10}
  step={0.1}
  labelFrequency={{start: 10, step: 10, stop: 91}}
  markerFrequency={{start: 0, step: 5}}
  value={value}
  onChange={v => setValue(v)}
  onChangeCommitted={handleCommit}
/>`,
    custom: `export const VolumeController = () => {
  const [value, setValue] = useState(2)

  const handleCommit = (value: number) => {
    console.log('Slider committed value:', value)
  }

  const marks: SliderMark[] = [
    {value: 1, label: 'Low'},
    {value: 2, label: 'Medium'},
    {value: 3, label: 'High'},
  ]

  return (
    <Slider
      marks={marks}
      value={value}
      onChange={v => setValue(v)}
      onChangeCommitted={handleCommit}
    />
  )
}`,
    colors: `export const VolumeController = () => {
  const [value, setValue] = useState(40)

  const handleCommit = (value: number) => {
    console.log('Slider committed value:', value)
  }

  return (
    <Slider
      value={value}
      onChange={v => setValue(v)}
      onChangeCommitted={handleCommit}
      handlePrimaryColor={'purple'}
      handleSecondaryColor={'black'}
      trackPrimaryColor={['accent', 'main']}
      trackSecondaryColor={'blue'}
      markPrimaryColor={'green'}
      markSecondaryColor={'orange'}
    />
  )
}`,
  },
  snackbar: {
    overview: `export const App = () => {
  return (
    <Theme>
      <SnackbarProvider>
        <Dashboard/>
      </SnackbarProvider>
    </Theme>
  )
}
const app = document.getElementById('app')
ReactDOM.render(<App />, app)

// ==============================

export const Dashboard = () => {
  const snackbar = useSnackbar()

  return (
    <Button
      bgColor={'success'}
      onClick={() =>
        snackbar.enqueue({
          content: 'Great Job!',
          variant: 'success',
          duration: 2000,
        })
      }
    >
      Success
    </Button>
  )
}
`,
  },
  spacer: {
    overview: `<Flex column>
  <Typography>These spans have</Typography>
  <Spacer size="40px" vertical />
  <Typography>a 40px vertical spacer between them.</Typography>
</Flex>`,
    breakpoints: `<>
  <Typography bgColor="royalblue">
    These spans have a varying vertical spacer
  </Typography>
  <Spacer size="40px" breakpoints={{sm: '3px', md: '100px'}} />
  <Typography bgColor="royalblue">
    between them depending on the current breakpoint.
  </Typography>
</>`,
  },
  switch: {
    overview: `export const ToggleTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  return <Switch checked={darkMode} onChange={value => setDarkMode(value)} />;
}`,
    colors: `<Switch
  checked={on}
  onChange={value => setOn(value)}
  trackColor={{on: 'info', off: 'secondary'}}
  handleColor={{on: 'royalblue', off: ['error', 'main']}}
/>;`,
  },

  tooltip: {
    overview: `<Tooltip tip="Is it me you're looking for?">
  <Button variant="outlined">Hover Me!</Button>
</Tooltip>`,
    direction: `<Tooltip tip="Hello from the other side." direction="right">
  <Button variant="outlined">Right</Button>
</Tooltip>`,
    delay: `<Tooltip tip="That was 2 seconds!" delay={2000}>
  <Button variant="outlined">Delayed Tooltip</Button>
</Tooltip>`,
  },
  typography: {
    overview: `<Typography variant="display-large">Big Heading!</Typography>`,
  },
};
