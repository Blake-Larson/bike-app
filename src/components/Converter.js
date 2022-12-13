import { React, useState } from 'react';

const Converter = () => {
	const [stats, setStats] = useState({
		carbon: 0,
		carCarbon: 0,
		distance: 0,
		metric: false,
	});

	const [distance, setDistance] = useState({
		distance: 0,
		metric: false,
	});

	function handleFormChange(event) {
		const { name, value, type, checked } = event.target;

		setDistance(prevDistance => ({
			...prevDistance,
			[name]: type === 'checkbox' ? checked : Number(value),
		}));
	}

	const handleSubmit = e => {
		e.preventDefault();
		let length;
		if (distance.metric) {
			length = distance.distance * 1.609;
		} else {
			length = distance.distance;
		}
		setStats({
			carbon: (length * 0.02).toFixed(2),
			carCarbon: (length * 0.96).toFixed(2),
			distance: distance.distance,
			metric: distance.metric,
		});
	};

	return (
		<div>
			<form id='converter' className='m-10' onSubmit={e => handleSubmit(e)}>
				<input
					type='number'
					name='distance'
					placeholder='Distance'
					onChange={handleFormChange}
					className='input border-2 border-base-300 w-32'
					required
				/>
				<input
					type='number'
					name='gas'
					placeholder='Gas Price'
					onChange={handleFormChange}
					className='input border-2 border-base-300 w-32'
				/>
				<label className='label cursor-pointer w-32'>
					<span>{'Metric'}</span>
					<input
						type='checkbox'
						name='metric'
						onChange={handleFormChange}
						className='checkbox'
					/>
				</label>
				<button className='btn btn-primary'>Get Stats</button>
			</form>
			<div>
				{stats.distance}
				<span>{stats.metric ? 'km' : 'mi'}</span>
			</div>
			<div>{stats.carbon} pounds of carbon</div>
			<div>{stats.carCarbon} pounds of carbon</div>
		</div>
	);
};

export default Converter;
