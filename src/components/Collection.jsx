import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Switch, Route, useParams, useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";

import { CircularProgress, Grid, IconButton } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import PrintIcon from "@material-ui/icons/Print";
import SaveIcon from "@material-ui/icons/Save";

import BackIconButton from "./BackIconButton";
import Conditional from "./Conditional";
import Content from "./Content";
import Header from "./Header";
import LoadingIconButton from "./LoadingIconButton";
import Page from "./Page";
import SearchField from "./SearchField";
import ResultList from "./ResultList";

import evaluate from "../utils/evaluate";
import useSearchParams from "../utils/useSearchParams";

/**
 * [Collection description]
 * @param       {string} [cid] Collection identifier
 * @param       {function} [search=()=>{}] Returns a `Promise` that resolves to an array of results
 * @param {function} [load=(id)=>{}] Returns a `Promise` that resolves to an item of the collection
 * @constructor
 */

export default function Collection({
  cid,
  search = () => Promise.reject(new Error("No search function provided")),
  load = () => Promise.reject(new Error("No load function provided")),
  save = () => Promise.reject(new Error("No save function provided")),
  CollectionProps = {
    title: "Collection",
    SearchFieldProps: {},
    ResultListProps: {
      subheader: null,
      mapper: (r) => r,
    },
  },
  ViewProps = {
    title: "View Item",
    render: () => {},
  },
  NewProps = {
    title: "New Item",
    render: () => {},
    data: {},
  },
  EditProps = {
    title: "Edit Item",
    render: () => {},
  },
}) {
  return (
    <Switch>
      <Route path={`/${cid}/v/:id`}>
        <ViewItem cid={cid} load={load} {...ViewProps} />
      </Route>
      <Route path={`/${cid}/e/:id`}>
        <EditItem cid={cid} load={load} save={save} {...EditProps} />
      </Route>
      <Route path={`/${cid}/n`}>
        <NewItem cid={cid} save={save} {...NewProps} />
      </Route>
      <Route path={`/${cid}`}>
        <CollectionPage
          cid={cid}
          search={search}
          {...CollectionProps}
        ></CollectionPage>
      </Route>
    </Switch>
  );
}

Collection.propTypes = {
  cid: PropTypes.string.isRequired,
  // functions
  search: PropTypes.func,
  load: PropTypes.func,
  save: PropTypes.func,
};

function CollectionPage({
  cid,
  search = Promise.reject(
    new Error("No search function provided to CollectionPage")
  ),
  print = () => null,
  title = "Collection",
  SearchFieldProps = {},
  ResultListProps = { mapper: (r) => r, subheader: null },
}) {
  const { push } = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [results, setResults] = useState(null);

  const handleSearch = (q, d) =>
    search(q, d)
      .then((r) => setResults(r))
      .catch((err) => {
        console.error(err);
        enqueueSnackbar(err.message, { variant: "error" });
      });

  const handleClear = () => {
    setResults(null);
  };

  return (
    <Page
      header={
        <Header
          LeftAction={<BackIconButton />}
          RightActions={[
            <IconButton key="print" onClick={() => window.print()}>
              <PrintIcon />
            </IconButton>,
            <IconButton key="new" onClick={() => push(`/${cid}/n`)}>
              <AddIcon />
            </IconButton>,
          ]}
        >
          {title}
        </Header>
      }
      content={
        <Content>
          <Grid container item justify="center">
            <SearchField
              label="Search"
              onSearch={handleSearch}
              onClear={handleClear}
              {...SearchFieldProps}
            />
          </Grid>{" "}
          <ResultList results={results} {...ResultListProps} />
        </Content>
      }
      print={print(results)}
    />
  );
}

function ViewItem({
  load = Promise.reject(new Error("No load function provided to ViewItem")),
  ...others
}) {
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState();

  useEffect(() => {
    load(id)
      .then((r) => setData(r))
      .catch((err) => {
        console.error(err);
        enqueueSnackbar(err.message, { variant: "error" });
      });
    // eslint-disable-next-line
  }, [id]);

  return (
    <Conditional
      show={data}
      Component={ViewPage}
      Alt={LoadingPage}
      data={data}
      {...others}
    />
  );
}

function ViewPage({
  cid,
  data,
  print = () => null,
  render = () => {},
  title = "View Item",
}) {
  const { push } = useHistory();
  const { id } = data;
  return (
    <Page
      header={
        <Header
          LeftAction={<BackIconButton />}
          RightActions={[
            <IconButton key="print" onClick={() => window.print()}>
              <PrintIcon />
            </IconButton>,
            <IconButton key="edit" onClick={() => push(`/${cid}/e/${id}`)}>
              <EditIcon />
            </IconButton>,
          ]}
        >
          {evaluate(title, data)}
        </Header>
      }
      content={<Content>{render(data)}</Content>}
      print={print(data)}
    />
  );
}

function EditItem({
  load = Promise.reject(new Error("No load function provided to EditItem")),
  ...others
}) {
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState();

  useEffect(() => {
    load(id)
      .then((r) => setData(r))
      .catch((err) => {
        console.error(err);
        enqueueSnackbar(err.message, { variant: "error" });
      });
    // eslint-disable-next-line
  }, [id]);

  return (
    <Conditional
      show={Boolean(data)}
      Component={EditPage}
      Alt={LoadingPage}
      data={data}
      setData={setData}
      {...others}
    />
  );
}

function EditPage({
  title = "Edit Item",
  render = () => {},
  data,
  setData,
  save = () =>
    Promise.reject(new Error("No save function provided to EditPage")),
}) {
  const { goBack } = useHistory();

  const handleSave = () => save(data).then(({ id }) => setTimeout(goBack, 100));

  return (
    <Page
      header={
        <Header
          LeftAction={<BackIconButton />}
          RightActions={[
            <LoadingIconButton key="save" onClick={handleSave}>
              <SaveIcon />
            </LoadingIconButton>,
          ]}
        >
          {evaluate(title, data)}
        </Header>
      }
      content={<Content>{render(data, setData)}</Content>}
    />
  );
}

function NewItem({ data: defaultData, ...others }) {
  const searchData = useSearchParams();
  const [data, setData] = useState({ ...defaultData, ...searchData });
  return <NewPage data={data} setData={setData} {...others} />;
}

function NewPage({
  cid,
  title = "New Item",
  render,
  data,
  setData,
  save = Promise.reject(new Error("No save function provided to NewPage")),
}) {
  const { replace } = useHistory();

  const handleSave = () =>
    save(data).then(({ id }) => setTimeout(replace, 100, `/${cid}/v/${id}`));

  return (
    <Page
      header={
        <Header
          LeftAction={<BackIconButton />}
          RightActions={[
            <LoadingIconButton key="save" onClick={handleSave}>
              <SaveIcon />
            </LoadingIconButton>,
          ]}
        >
          {evaluate(title, data)}
        </Header>
      }
      content={<Content>{render(data, setData)}</Content>}
    />
  );
}

function LoadingPage() {
  return (
    <Page
      header={
        <Header
          LeftAction={<BackIconButton />}
          RightActions={[<CircularProgress key="progress" color="secondary" />]}
        >
          Loading...
        </Header>
      }
    />
  );
}
