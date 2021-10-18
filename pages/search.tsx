import axios from 'axios';
import { GetStaticProps } from 'next';
import { withLayout } from '../HOC/index';
import { MenuItem } from '../interfaces/menu.interface';

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}

const Search = (): JSX.Element => {

	return (
		<>
			Search
		</>
	);
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};
