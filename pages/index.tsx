import { Htag, Button } from "../components";

const Home = () => {
  return (
    <div >
      <Htag tag="h1">Текст</Htag>
      <Button appearance="ghost" arrow="right">Привет</Button>
      <Button appearance="primary" arrow="down">Привет</Button>
    </div>
  )
}

export default Home;