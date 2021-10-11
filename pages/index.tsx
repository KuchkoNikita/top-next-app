import { Htag, Button, Rating } from "../components";
import { withLayout } from "../HOC";

const Home = () => {
  return (
    <div>
      <Htag tag="h1">Текст</Htag>
      <Button appearance="ghost" arrow="right">Привет</Button>
      <Button appearance="primary" arrow="down">Привет</Button>
      <Rating rating={4} />
    </div>
  )
}

export default withLayout(Home);