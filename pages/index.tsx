import Header from '../components/global/Header'
import Introduction from '../components/landing/Introduction'
import StackIntroduction from '../components/landing/StackIntroduction'

export default function Home() {
  return (
    <>
      <div className="container">
        <Header/>
        <Introduction/>
        <StackIntroduction/>
      </div>
    </>
  )
}
