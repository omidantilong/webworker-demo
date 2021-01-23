/*import {
  find as _find,
  keyBy as _keyBy,
  groupBy as _groupBy,
  filter as _filter,
  isEqual as _isEqual,
  cloneDeep as _cloneDeep,
  assign as _assign,
  merge as _merge,
} from "lodash"*/

import find from "lodash/find"
import findIndex from "lodash/findIndex"
import keyBy from "lodash/keyBy"
import groupBy from "lodash/groupBy"
import filter from "lodash/filter"
import isEqual from "lodash/isEqual"
import cloneDeep from "lodash/cloneDeep"
import assign from "lodash/assign"
import merge from "lodash/merge"
import uniq from "lodash/merge"
import clone from "lodash/clone"
import uniqBy from "lodash/uniqBy"
import concat from "lodash/concat"
export default {
  find: find,
  findIndex: findIndex,
  keyBy: keyBy,
  groupBy: groupBy,
  filter: filter,
  isEqual: isEqual,
  cloneDeep: cloneDeep,
  assign: assign,
  merge: merge,
  uniq: uniq,
  clone: clone,
  uniqBy: uniqBy,
  concat: concat,
}
