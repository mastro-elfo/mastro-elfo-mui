# v2.19.1

- [x] :beetle: Snackbars are visible when a page is printed

# v2.19.0

- [x] :sparkles: New property `ReloadIconButtonProps` of `ErrorWrapper`

# v2.18.0

- [x] :sparkles: New Component ConfigWrapper

# v2.17.0

- [x] :beetle: Fix ConfirmDialogButton properties
- [x] :sparkles: New property actions of ConfirmDialog

# v2.16.0

- [x] :sparkles: New property `Component` of `ConfirmDialogButton`
- [x] :beetle: Fix theme update

# v2.15.0

- [x] :sparkles: New property `state` of `Push`

# v2.14.1

- [x] :beetle: Fix named export `delay`
- [x] :beetle: Fix named import `delay` in `SearchField` component

# v2.14.0

- [x] :sparkles: New utility `delay`
- [x] :arrow_up: `SearchField` calls search after `delay`

# v2.13.0

- [x] :beetle: Fix `Page` `height`
  ```diff
  - paper: { minHeight: "100%" },
  + paper: { height: "100vh" },
  ```
- [x] :sparkles: Add `Loading` with `AbsoluteCircularProgress` to search button in `SearchField` component
- [x] :sparkles: Add `LoadingProps` to `SearchField` component

# v2.12.0

- [x] :sparkles: `For` component
  - properties:
    - `each`: a list of object that will be used as properties
    - `Component`: an element type that will be created for `each` element
    - `map`: a function to map each element to `Component` properties
    - `Container`: en element that wraps the `Component`s
    - `ComponentProps`: common properties for each `Component`
    - `ContainerProps`: properties for `Container`

# v2.11.0

- [x] :sparkles: New property `disabled` for each item in `DrawerLists`
- [x] :beetle: Don't try to show `null` or `undefined` items in `DrawerLists`
- [x] :sparkles: New property `Component` for each item in `DrawerLists`
- [x] :wastebasket: Use `leftIcon` in `ResultList` component
  - Also mark `ListIcon` as deprecated

# v2.10.3

- [x] :beetle: `LoadingIconButton` use `finally` at the end of the `Promise` chain
- [x] :beetle: `LoadingIconButton` resolve `onClick`
- [x] :beetle: `LoginForm` resolve `login`

# v2.10.2

- [x] :beetle: Fix rollup config
- [x] :beetle: Move deprecation warning inside functions `getJson` and `setJson`

# v2.10.1

- [x] :beetle: `useMounted` didn't work as expected

# v2.10.0

- [x] :sparkles: new utility `load`/`store`/`remove` from/in session or local storage
- [x] :beetle: don't overwrite `getJson` and `setJson` if they're already defined
- [x] :wastebasket: mark `getJson` and `setJson` as deprecated, since they may conflict with other libraries

# v2.9.0

- :arrow_up: `onSearch` can be a regular `function` or return a `Promise`

# v2.8.0

- [x] :sparkles: `NotifyWrapper` has new property `DismissIconButtonProps`
- [x] :wastebasket: `color` and `title` in dismiss `IconButton` in `NotifyWrapper` are marked as deprecated, use `DismissIconButtonProps` instead

# v2.7.0

- [x] :sparkles: `DrawerLists` items have new property `Component`
- [x] :arrow_up: script `create-page.js`
  ```diff
  - import BrokenImageIcon from "@material-ui/icons/BrokenImage";
  + import DrawerIcon from "@material-ui/icons/BrokenImage";
  ```

# v2.6.2

- [x] :beetle: warning-treating-module-as-external-dependency

# v2.6.1

- [x] :beetle: Fix named export `LoginForm`

# v2.6.0

- [x] :sparkles: new component `LoginForm`

# v2.5.0

- [x] :sparkles: new component `FileField`

# v2.4.0

- [x] :sparkles: new hook `useMounted`
- [x] :wastebasket: mark deprecated `Login`
- [x] :wastebasket: mark deprecated `LoginDialog`
- [x] :wastebasket: mark deprecated `catch` in `SearchField`
- [x] :wastebasket: mark deprecated `catch` in `LoadingIconButton`

# v2.3.1

- [x] remove `edge="end"` from `IconButton`s
  - The default appearance is correct

# v2.3.0

- [x] :lipstick: add `edge="end"` to `IconButton`s
- [x] :sparkles: new property `defaultValue` of `SearchField`

# v2.2.0

- [x] :put_litter_in_its_place: Remove deprecated components `Print` and `NoPrint`
- [x] :sparkles: `BackIconButton` accepts `children` property

# v2.1.2

- :package: remove `prompt` dependency

# v2.1.1

- :beetle: Fix import in `Push` component

# v2.1.0

- :beetle: Fix deprecated property `callback` for `LoadingIconButton` used in `Collection` component

# v2.0.0

- :boom: :put_litter_in_its_place: `CollectionProps.mapper`
- :boom: :put_litter_in_its_place: `RightIcon` in `ResultList`
- :boom: :put_litter_in_its_place: `showClear` property in `SearchField`
- :boom: :put_litter_in_its_place: `IconButtonProps` in `DrawerIconButton`
- :boom: :put_litter_in_its_place: `callback` in `LoadingIconButton`
- :boom: :put_litter_in_its_place: `Component` in `Push`
- :boom: :put_litter_in_its_place: `FixedBottomNavigation`
- :boom: Remove named export `SortableList` to avoid `peerDependencies`
- :package: Remove `react-smooth-dnd` from `peerDependencies`
- :boom: Remove named export `Markdown` to avoid `peerDependencies`
- :package: Remove `react-markdown` from `peerDependencies`
- :arrow_up: :boom: `NestedListTypography`

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
- :wastebasket: deprecation warning for `Component` prop

# v1.24.0

- :arrow_up: in `LoadingIconButton` use `onClick` instead of `callback`
- :wastebasket: deprecation warning for `callback`
- :rotating_light: add tests for `LoadingIconButton`
- :rotating_light: Add `LoadingProps` to `LoadingIconButton`
- :rotating_light: Fix documentation

# v1.23.0

- :arrow_up: Use `...rest` with `IconButton` in `DrawerIconButton` component instead of `IconButtonProps`
- :wastebasket: deprecation warning for `IconButtonProps`

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
  - see <https://material-ui.com/system/display/#display-in-print>
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

# v1.3.0

- Add push/replace Button
- Add i18n

# v1.2.0

- Add Login component

# v1.1.0

- Add SuspenseWrapper component

# v1.0.0

Older versions
