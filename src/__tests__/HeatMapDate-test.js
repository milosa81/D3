import React from "react"
import Enzyme, { shallow, mount, render } from "enzyme"
import HeatMapDate from "../components/HeatMapDate"
import { setData } from "../utils"
import Adapter from "enzyme-adapter-react-16"

function setUp(yearStart, monthStart, dayStart, yearEnd, monthEnd, dayEnd, nb) {
	const startDate = new Date(yearStart, monthStart - 1, dayStart + 1)
	const endDate = new Date(yearEnd, monthEnd - 1, dayEnd + 1)
	const data = setData(startDate, endDate, nb)
	Enzyme.configure({ adapter: new Adapter() })
	return { data, startDate, endDate }
}

test("it should render without throwing error", () => {
	const { data, startDate, endDate } = setUp(2017, 1, 2, 2018, 1, 2, 231)
	const wrapper = shallow(<HeatMapDate startDate={startDate} endDate={endDate} data={data} colors={[]} />)
	expect(wrapper).toMatchSnapshot()
})

test("it should throw error because there is no data required prop", () => {
	const { data, startDate, endDate } = setUp(2017, 1, 2, 2018, 1, 2, 231)
	let error = null
	try {
		const wrapper = shallow(<HeatMapDate startDate={startDate} endDate={endDate} colors={[]} />)
	} catch (e) {
		error = e
	}
	expect(error).toBeInstanceOf(Error)
})

test("it should throw error because there is no startDate required prop", () => {
	const { data, startDate, endDate } = setUp(2017, 1, 2, 2018, 1, 2, 231)
	let error = null
	try {
		const wrapper = shallow(<HeatMapDate endDate={endDate} data={data} colors={[]} />)
	} catch (e) {
		error = e
	}
	expect(error).toBeInstanceOf(Error)
})

test("it should throw error because there is no endDate required prop", () => {
	const { data, startDate, endDate } = setUp(2017, 1, 2, 2018, 1, 2, 231)
	let error = null
	try {
		const wrapper = shallow(<HeatMapDate startDate={startDate} data={data} colors={[]} />)
	} catch (e) {
		error = e
	}
	expect(error).toBeInstanceOf(Error)
})

test("it should throw error because there is no colors required prop", () => {
	const { data, startDate, endDate } = setUp(2017, 1, 2, 2018, 1, 2, 231)
	let error = null
	try {
		const wrapper = shallow(<HeatMapDate startDate={startDate} endDate={endDate} data={data} />)
	} catch (e) {
		error = e
	}
	expect(error).toBeInstanceOf(Error)
})