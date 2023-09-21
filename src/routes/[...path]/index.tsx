import { component$, useContext } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { DataType, STORE } from '~/stores/global'
import DefaultPage from '~/components/pages/DefaultPage'
import FirstPage from '~/components/pages/FirstPage'
import SecondPage from '~/components/pages/SecondPage'

export default component$(() => {
  const store = useContext(STORE)

  const getPage = (dataType: DataType) => {
    if (dataType === DataType.first) {
      return (
        <FirstPage />
      )
    }
    if (dataType === DataType.second) {
      return (
        <SecondPage />
      )
    }
    return (
      <DefaultPage />
    )
  }

  return (
    <div>
      <div>Page Content:</div>
      <div>{getPage(store.dataType)}</div>
      <div>Navigation:</div>
      <div>
      <div>
        <Link href="/">
          Default Page
        </Link>
        <Link href="/first/">
          First Page
        </Link>
        <Link href="/second/">
          Second Page
        </Link>
      </div>
      </div>
    </div>
  )
})
