import { Page } from "../../styles/styles"
import { Headline } from "../../components/Headline"
import { LoginForm } from "../../components/Form"
import { Header } from "../../components/Header"

import logo from '../../assets/logo.svg'
import bg from '../../assets/bg.jpg'

export function Login() {
  return (
    <Page>
      <div>
        <Header>
          <img src={logo} alt="Logo" />
        </Header>

        <main>
          <Headline/>
          <LoginForm/>
        </main>
      </div>

      <img src={bg} alt="ilustração" />
    </Page>
  )
}