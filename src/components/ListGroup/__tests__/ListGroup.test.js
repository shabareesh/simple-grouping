import React from 'react';
import {render} from "@testing-library/react";
import ListGroup from "../ListGroup";

describe('ListGroup', () => {
	test('should match snapshot', () => {
		const { baseElement } = render(<ListGroup />);

		expect(baseElement).toMatchSnapshot();
	});
});
