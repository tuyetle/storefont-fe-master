import { put, call, takeLatest } from 'redux-saga/effects';
import { getHighlightProjectApi } from '~/services/apis/highlightProjectApi';
import {
  GET_HIGHLIGHT_PROJECTS,
  GET_HIGHLIGHT_PROJECTS_SUCCEEDED,
} from '~/actions/BusinessActionTypes';

function* getHighlightProjects() {
  const data = yield call(getHighlightProjectApi);
  yield put({
    type: GET_HIGHLIGHT_PROJECTS_SUCCEEDED,
    payload: data,
  });
}

export default function* watchGetHighlightProjects() {
  yield takeLatest(GET_HIGHLIGHT_PROJECTS, getHighlightProjects);
}
