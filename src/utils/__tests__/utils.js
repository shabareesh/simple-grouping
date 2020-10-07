import { getGroupedData } from "../utils";

describe('utils', () => {
	test('should get the grouped data with listId', () => {
		const data = [
			{"id": 755, "listId": 2, "name": ""},
			{"id": 203, "listId": 2, "name": ""},
			{"id": 684, "listId": 1, "name": "Item 684"},
			{"id": 276, "listId": 1, "name": "Item 276"},
			{"id": 736, "listId": 3, "name": null},
			{"id": 926, "listId": 4, "name": null},
			{"id": 808, "listId": 4, "name": "Item 808"},
			{"id": 599, "listId": 1, "name": null},
			{"id": 424, "listId": 2, "name": null},
			{"id": 444, "listId": 1, "name": ""},
			{"id": 809, "listId": 3, "name": null},
			{"id": 293, "listId": 2, "name": null},
			{"id": 510, "listId": 2, "name": null},
			{"id": 680, "listId": 3, "name": "Item 680"},
			{"id": 231, "listId": 2, "name": null},
			{"id": 534, "listId": 4, "name": "Item 534"},
		];

		const expectedData = [
			{
				listId: "1",
				list: [
					{"id": 276, "listId": 1, "name": "Item 276"},
					{"id": 684, "listId": 1, "name": "Item 684"},
				],
			},
			{
				listId: "3",
				list: [
					{"id": 680, "listId": 3, "name": "Item 680"},
				],
			},
			{
				listId: "4",
				list: [
					{"id": 534, "listId": 4, "name": "Item 534"},
					{"id": 808, "listId": 4, "name": "Item 808"},
				],
			},
		];

		expect(getGroupedData(data)).toEqual(expectedData);
	})
})
