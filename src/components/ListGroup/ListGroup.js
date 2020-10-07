import React from 'react';
import data from '../../api/data';
import { getGroupedData } from '../../utils/utils';

import './listGroup.scss';

const ListGroup = () => (
	<div className="list-group">
		{getGroupedData(data).map(({ listId, list }) => (
			<div className="list-group--card" key={listId}>
				<h4 className="list-group--card__title">List ID: {listId}</h4>
				<ul className="list-group--card__list">
					{list.map((e) => (
						<li key={e.id}>{e.name}</li>
					))}
				</ul>
			</div>
		))}
	</div>
);

export default ListGroup;
