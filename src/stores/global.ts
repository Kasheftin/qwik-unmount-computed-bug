import { createContextId } from "@builder.io/qwik"

export enum DataType {
  empty = 'empty',
  first = 'first',
  second = 'second'
}

export type FirstData = {
  key1: { key1: string }
}

export type SecondData = {
  key2: { key2: string }
}


export type Store = {
  routepath: string
  data: FirstData | SecondData | null
  dataType: DataType
}

export const STORE = createContextId<Store>('com.pubngn.global')

export const getInitialStore = (): Store => ({
  routepath: '',
  data: null,
  dataType: DataType.empty
})

export const loadStore = async (routepath: string) => {
  const store = getInitialStore()
  store.routepath = routepath
  const { data, dataType } = await loadData(store)
  store.data = data
  store.dataType = dataType
  return store
}

const timeout = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay))

const loadData = async (store: Store) => {
  await timeout(500)
  if (store.routepath === 'first') {
    return {
      dataType: DataType.first,
      data: {
        key1: {
          key1: 'first'
        }
      }
    }
  } else if (store.routepath === 'second') {
    return {
      dataType: DataType.second,
      data: {
        key2: {
          key2: 'second'
        }
      }
    }
  } else {
    return {
      dataType: DataType.empty,
      data: null
    }
  }
}
