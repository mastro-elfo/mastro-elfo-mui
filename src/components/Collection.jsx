import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Switch, Route, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

import { CircularProgress, Grid } from "@material-ui/core";

import SaveIcon from "@material-ui/icons/Save";

import {
  BackIconButton,
  Condition,
  Content,
  Header,
  LoadingIconButton,
  Page,
  SearchField,
  ResultList
} from "./";

export default function Collection({
  cid,
  search = () => Promise.reject(new Error("No search function provided")),
  load = () => Promise.reject(new Error("No load function provided")),
  // save= ()=>Promise.reject(new Error("No save function provided")),
  mapper = r => r
}) {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState();
  const { id } = useParams();

  // Load data if there's an id
  useEffect(() => {
    if (id !== undefined) {
      load(id)
        .then(r => {
          setData(r);
        })
        .catch(err => {
          console.error(err);
          enqueueSnackbar(err.message, { variant: "error" });
        });
    }
    // eslint-disable-next-line
  }, [id]);

  return (
    <Switch>
      <Route path={`/${cid}/v/:id`}>
        <Condition show={data !== undefined} alt={<LoadingPage />}>
          <ViewPage />
        </Condition>
      </Route>
      <Route path={`/${cid}/e/:id`}>
        <Condition show={data !== undefined} alt={<LoadingPage />}>
          <EditPage />
        </Condition>
      </Route>
      <Route path={`/${cid}/n`}>
        <NewPage />
      </Route>
      <Route path={`/${cid}`}>
        <CollectionPage mapper={mapper}></CollectionPage>
      </Route>
    </Switch>
  );
}

Collection.propTypes = {
  cid: PropTypes.string.isRequired,
  // functions
  search: PropTypes.func,
  load: PropTypes.func,
  save: PropTypes.func
};

function CollectionPage({ search, mapper }) {
  const { enqueueSnackbar } = useSnackbar();
  const [results, setResults] = useState(null);

  const handleSearch = (q, d) =>
    search(q, d)
      .then(r => setResults(r))
      .catch(err => {
        console.error(err);
        enqueueSnackbar(err.message, { variant: "error" });
      });

  const handleClear = () => {
    setResults(null);
  };

  return (
    <Page
      header={<Header LeftAction={<BackIconButton />}>Collection</Header>}
      content={
        <Content>
          <Grid container item justify="center">
            <SearchField
              label="Search"
              onSearch={handleSearch}
              onClear={handleClear}
            />
          </Grid>{" "}
          <ResultList results={results} mapper={mapper} />
        </Content>
      }
    />
  );
}

function ViewPage({ data }) {
  return (
    <Page
      header={<Header LeftAction={<BackIconButton />}>View Item</Header>}
      content={<Content></Content>}
    />
  );
}

function EditPage({
  data,
  save = () => Promise.reject(new Error("No save function provided"))
}) {
  return (
    <Page
      header={
        <Header
          LeftAction={<BackIconButton />}
          RightActions={[
            <LoadingIconButton key="save" color="inherit" callback={save}>
              <SaveIcon />
            </LoadingIconButton>
          ]}
        >
          Edit Item
        </Header>
      }
      content={<Content></Content>}
    />
  );
}

function NewPage({ save }) {
  return (
    <Page
      header={
        <Header
          LeftAction={<BackIconButton />}
          RightActions={[
            <LoadingIconButton key="save" color="inherit" callback={save}>
              <SaveIcon />
            </LoadingIconButton>
          ]}
        >
          New Item
        </Header>
      }
      content={<Content></Content>}
    />
  );
}

function LoadingPage() {
  return (
    <Page
      header={
        <Header
          LeftAction={<BackIconButton />}
          RightActions={[<CircularProgress color="secondary" />]}
        >
          Loading...
        </Header>
      }
    />
  );
}
