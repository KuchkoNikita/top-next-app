import axios from "axios";
import { GetStaticProps } from "next";

import { Htag, Button, Rating } from "../components";
import { withLayout } from "../HOC";
import { MenuItem } from "../interfaces/menu.interface";

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number,
}

const Home = ({menu, firstCategory}: HomeProps): JSX.Element => {
  return (
    <div>
      <Htag tag="h1">Текст</Htag>
      <Button appearance="ghost" arrow="right">Привет</Button>
      <Button appearance="primary" arrow="down">Привет</Button>
      <Rating rating={4} />
      <ul>
        {menu.map(m => (
          <li key={m._id.secondCategory}>
            {m._id.secondCategory}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
    firstCategory
  })

  return {
    props: {
      menu,
      firstCategory,
    }
  }
}