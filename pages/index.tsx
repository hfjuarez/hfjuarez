import Header from '../components/global/Header'
import Introduction from '../components/landing/Introduction'
import Stack from '../components/landing/Stack'

export default function Home() {
  return (
    <>
      <div className="container">
        <Header/>
        <Introduction/>
        <Stack/>
      </div>
    </>
  )
}
