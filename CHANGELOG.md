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
