# v2.0.0

- [x] :boom: :put_litter_in_its_place: `CollectionProps.mapper`
- [x] :boom: :put_litter_in_its_place: `RightIcon` in `ResultList`
- [x] :boom: :put_litter_in_its_place: `showClear` property in `SearchField`
- [x] :boom: :put_litter_in_its_place: `IconButtonProps` in `DrawerIconButton`
- [x] :boom: :put_litter_in_its_place: `callback` in `LoadingIconButton`
- [x] :boom: :put_litter_in_its_place: `Component` in `Push`
- [x] :boom: :put_litter_in_its_place: `FixedBottomNavigation`
- [x] :boom: Remove named export `SortableList` to avoid `peerDependencies`
- [x] :package: Remove `react-smooth-dnd` from `peerDependencies`
- [x] :boom: Remove named export `Markdown` to avoid `peerDependencies`
- [x] :package: Remove `react-markdown` from `peerDependencies`
- [x] :arrow_up: :boom: `NestedListTypography`

# v1.31.0

- :arrow_up: :lipstick: `ErrorWrapper` has `header` property
- :sparkles: `Collection` has `PrintButton`
- :sparkles: `ViewPage` in `Collection` has `PrintButton`

# v1.30.0

- :sparkles: new component `MenuIconButton`
- :beetle: fix `React` not in scope

# v1.29.0

- :sparkles: utility `markdown-renderes`
- :wastebasket: `component/Markdown` is deprecated

# v1.28.0

- :sparkles: `Footer` component
- :wastebasket: `FixedBottomNavigation`, use `Footer` instead

# v1.27.0

- :beetle: `Push` doesn't render children when creates a new element
- :sparkles: `BackIconButton` has new property `IconProps`

# v1.26.0

- :sparkles: `BackIconButton` has new property `back`
  - `onClick` calls `history.go(-back)`
  - `back` defaults to `1` to avoid breaking changes

# v1.25.0

- :arrow_up: `Push` use `cloneElement` instead of `Component` prop
- :wastebasket: deprection warning for `Component` prop

# v1.24.0

- :arrow_up: in `LoadingIconButton` use `onClick` instead of `callback`
- :wastebasket: deprection warning for `callback`
- :rotating_light: add tests for `LoadingIconButton`
- :rotating_light: Add `LoadingProps` to `LoadingIconButton`
- :rotating_light: Fix documentation

# v1.23.0

- :arrow_up: Use `...rest` with `IconButton` in `DrawerIconButton` component instead of `IconButtonProps`
- :wastebasket: deprection warning for `IconButtonProps`

# v1.22.0

- FIX Apply `BoxProps` to `Box` component in `HeaderSearchField`
- FIX add named exports
- FIX `SearchField` `hideClearButton`
- FIX `SearchField` handled/unhandled behaviour

# v1.21.0

- [FIX] export default `FixedBottomNavigation`
- [FIX] export named `FixedBottomNavigation`
- [FIX] Bug when theme is dark, print should not be affectedtar
- [NEW] components `MediaScreen` and `MediaPrint`
  - see https://material-ui.com/system/display/#display-in-print
- [FIX] `TableHeadCell` print exact backgroundColor in firefox

# v1.20.0

- [FIX] add **utils/storage.js** to rollup
- [DEL] `peerDependencies` for _i18n_
- [FIX] `Paper` in `Page` component use `className` to apply `minHeight`

# v1.19.0

- [NEW] Add `footer` property to `Page`
- [NEW] `PaperProps` property to `Page` component
- [NEW] `Header` applies `...rest` to `AppBar`
- [NEW] `Header` property `ToolbarProps`

# v1.18.0

- [FIX] Export `usePalette` in **utils/index.js**
- [FIX] `Typography` inside `Header` component inherits _color_
- [FIX] `ErrorWrapper` doesn't have `Page`
- [FIX] `ThemeWrapper` overwrites `palette`
  ```diff
  - const THEME = createMuiTheme({ ...props, palette });
  + const THEME = createMuiTheme({
  +   ...props,
  +   palette: { ...props.palette, ...palette }
  + });
  ```
- [IMPROVE] `SearchField` to let it be controlled
- [FIX] _ClearButton_ in `SearchField` is visible
- [NEW] In `SearchField` hide _ClearButton_ with `hideClearButton` property

# v1.17.0

- [FIX] `DrawerLists` apply `title` to `ListItem`
- [NEW] hook `usePalette`

# v1.16.0

- [IMPROVE] style `absolute`, accept `...rest` params
- [NEW] style `fixed`, accept `...rest` params
- [FIX] `NestedListTypography` check if `object` is `array`
- [FIX] `SearchField` clean query

# v1.15.0

- [FIX] remove `color="inherit"` from components with `IconButton`
- [FIX] In `Page` component, `Paper` needs an element that closes the content:
  ```diff
  + <div style={{height: "1px"}}/>
  ```
- [DELETE] remove comments from `AppContainer`

# v1.14.0

- [FIX] _prop-types_ peerDependencies: `15.0.0`
- [FIX] `ResultList` incorrect `PropTypes` for `subheader`
  ```diff
  - subheader: PropTypes.string
  + subheader: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  ```
- [NEW] component `FixedBottomNavigation`
- [IMPROVE] `SearchField` completely clean deburred value with utility `clean`

# v1.13.0

- [FIX] Entry point in package.json
  ```diff
  - "main": "index.js",
  + "main": "dist/index.js"
  ```

# v1.12.0

Use rollup to build yarn package

# v1.11.0

- New component: `DraggableList`
- New utility: `clean`
- `ResultList` uses `evaluate` int `SubHeader`
- `CollectionPage` doesn't explicitly passes `subheader`

# v1.10.0

- Fix `SearchField` override `InputProps`
- Add `showClear` to `SearchField` props, to choose if the clear button should always be visible
- Fix and test `HeaderSearchField`
- `Collection.jsx`
  - `NewItem`: If provided, use search parameters as default values
  - `CollectionPage`: deprecation warning has to be fixed
- Put a `Paper` inside `Page` to allow use of dark theme

# v1.9.0

- `AppContainer` uses `Wrapper`
- New hook `useSearchParams`
- New script `create-context`

# v1.8.1

- Add `TobFabProps` to `Page`
- `ResultList`, add property `RightAction`
  - Can be `ListItemIcon` or `ListItemSecondaryAction`
- Update README
- Add tests for ResultList component

# v1.7.0

- Check if `children` is not `null` or `undefined` in `NestedListTypography`
- Remove `Fragment` from `NestedListTypography` import
- In component `Collection` add `ResultListProps`
  - `ResultListProps.subheader` can be a`string` or a `function(results)`
  - Move `mapper` from `CollectionProps` to `ResultListProps`
    - This break previous version
    - Add warning

# v1.6.0

- New component `NestedListTypography`

# v1.5.0

- Add property `SearchFieldProps` to `Collection` component
- New component `Markdown`

# v1.4.0

- Add custom title to collection component

# 1.3.0

- Add push/replace Button
- Add i18n

# 1.2.0

- Add Login component

# 1.1.0

- Add SuspenseWrapper component

# 1.0.0

Older versions
