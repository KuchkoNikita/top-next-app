import { useEffect, useState } from 'react';
import cn from 'classnames';

import { RatingProps } from './Rating.props';
import StarIcon from "./star.svg";
import styles from './Rating.module.css';

export const Rating = ({ isEditable = false, rating, setRating, className, ...props }: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))
	
	useEffect(() => {
		constructRating(rating);
	}, [rating])

	const changeDisplay = (i: number) => {
		if (!isEditable) {
			return;
		}

		constructRating(i)
	}

	const onClick = (i: number) => {
		if (!isEditable || !setRating) {
			return;
		}

		setRating(i);
	};

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => (
			<span
				onMouseEnter={() => changeDisplay(i + 1)}
				onMouseLeave={() => changeDisplay(rating)}
				onClick={() => onClick(i + 1)}
				tabIndex={isEditable ? 0 : -1}
			>
			<StarIcon 
				tabIndex={isEditable ? 0 : -1}
				onKeyDown={(e: React.KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)}
			/>
			</span>
		));

		setRatingArray(updatedArray);
	};

	const handleSpace = (i: number, e: React.KeyboardEvent<SVGAElement>) => {
		if (e.code != "Space" || !setRating) {
			return;
		}

		setRating(i);
	}

	return (
		<div {...props}>
			{ratingArray.map((r, i) => (
				<span key={i}>{r}</span>
			))}
		</div>
	);
};