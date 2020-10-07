export const getGroupedData = (data) => {
	const filteredData = data
		.filter((e) => e.name)
		.reduce((acc, val) => {
			let key = val['listId'];
			(acc[key] ? acc[key] : (acc[key] = [])).push(val);
			return acc;
		}, {});

	return Object.keys(filteredData).map((e) => ({
		listId: e,
		list: filteredData[e].sort((a, b) => a.id - b.id)
	}));
};
