import { component$, useComputed$, useContext } from '@builder.io/qwik'
import { type FirstData, STORE } from '~/stores/global'

export default component$(() => {
  const store = useContext(STORE)
  const data = store.data as FirstData
  const content = useComputed$(() => {
    return data.key1.key1
  })

  return (
    <div>
      First Content: {content.value}
    </div>
  )
})
