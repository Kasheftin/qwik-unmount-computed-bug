import { component$, useComputed$, useContext } from '@builder.io/qwik'
import { type SecondData, STORE } from '~/stores/global'

export default component$(() => {
  const store = useContext(STORE)
  const data = store.data as SecondData
  const content = useComputed$(() => {
    return data.key2.key2
  })

  return (
    <div>
      Second Content: {content.value}
    </div>
  )
})
