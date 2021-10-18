import parse from 'html-react-parser';
import { Htag, HhData, Tag, Advantages } from '../../components/index';
import { TopPageComponentProps } from './TopPageComponent.props';
import { TopLevelCategory } from '../../interfaces/page.interface';
import styles from './TopPageComponent.module.css';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products && <Tag color='grey' size='m'>{products.length}</Tag>}
				<span>Сортировка</span>
			</div>
			<div>
				{products && products.map(p => (<div key={p._id}>{p.title}</div>))}
			</div>
			<div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<Tag color='red' size='m'>hh.ru</Tag>
			</div>
			{firstCategory == TopLevelCategory.Courses && <HhData {...page.hh} />}
			{page.advantages && page.advantages.length > 0 && <>
				<Htag tag="h2">Примущества</Htag>
				<Advantages advantages={page.advantages} />
			</>}
			{page.seoText && <div>{parse(page.seoText)}</div>}
			<Htag tag="h2">Получаемые навыки</Htag>
			{page.tags.map(t => <Tag key={t} color="primary">{t}</Tag>)}
		</div>
	);
};