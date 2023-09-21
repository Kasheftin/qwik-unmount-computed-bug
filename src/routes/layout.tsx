import { component$, Slot, useContextProvider, useStore, useTask$ } from '@builder.io/qwik'
import { type DocumentHead, routeLoader$ } from '@builder.io/qwik-city'
import { DataType, type FirstData, getInitialStore, loadStore, type SecondData, STORE } from '~/stores/global'

export const useRouteLoader = routeLoader$(async ({ params }) => {
  const store = await loadStore(params.path)
  return store
})

export default component$(() => {
  const storeData = useRouteLoader()
  const store = useStore(getInitialStore())
  useContextProvider(STORE, store)

  useTask$(({ track }) => {
    track(() => storeData.value)
    Object.assign(store, storeData.value)
  })

  return (
    <div>
      <Slot />
    </div>
  )
})

export const head: DocumentHead = ({ resolveValue }) => {
  const store = resolveValue(useRouteLoader)
  if (store.dataType === DataType.first) {
    const data = store.data as FirstData
    return {
      title: `${data.key1.key1} - First Title`
    }
  } else if (store.dataType === DataType.second) {
    const data = store.data as SecondData
    return {
      title: `${data.key2.key2} - Second Title`
    }
  } else {
    return {
      title: 'Empty Title'
    }
  }
}
