import React, { useState } from 'react';

const Converter = () => {
	type Stats = {
		carbon: number;
		carCarbon: number;
		distance: number;
		metric: boolean;
		cost: number;
	};
	type Form = {
		distance: number;
		metric: boolean;
		gas: number;
	};

	const [stats, setStats] = useState<Stats>({
		carbon: 0,
		carCarbon: 0,
		distance: 0,
		metric: false,
		cost: 0,
	});

	const [form, setForm] = useState<Form>({
		distance: 0,
		metric: false,
		gas: 0,
	});

	function handleFormChange(e: React.FormEvent) {
		const { name, value, type, checked } = e.target as HTMLInputElement;

		setForm(prevForm => ({
			...prevForm,
			[name]: type === 'checkbox' ? checked : Number(value),
		}));
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		let length: number;
		if (form.metric) {
			length = form.distance * 1.609;
		} else {
			length = form.distance;
		}
		setStats({
			carbon: Number((length * 0.02).toFixed(2)),
			carCarbon: Number((length * 0.96).toFixed(2)),
			distance: form.distance,
			metric: form.metric,
			cost: Number((form.gas * 0.04 * length).toFixed(2)),
		});
	};

	return (
		<div id='converter'>
			<form className='m-5 flex flex-col' onSubmit={e => handleSubmit(e)}>
				<div className='grid grid-cols-2 m-5'>
					<label className='w-32 flex flex-col'>
						<span className='pl-2'>Distance</span>
						<input
							type='number'
							name='distance'
							placeholder='5'
							onChange={handleFormChange}
							className='input border-2 border-base-300 w-32'
							required
						/>
					</label>
					<label className='w-32 flex flex-col text-left'>
						<span className='pl-2'>Avg. Gas Price</span>
						<input
							type='text'
							name='gas'
							placeholder='3.50'
							onChange={handleFormChange}
							className='input border-2 border-base-300 w-32'
						/>
					</label>
					<label className='label cursor-pointer w-32'>
						<span>Metric</span>
						<input
							type='checkbox'
							name='metric'
							onChange={handleFormChange}
							className='checkbox'
						/>
					</label>
				</div>
				<button className='btn btn-primary self-center'>Get Stats</button>
			</form>
			<div className='flex flex-col'>
				<div className='stat border-2 w-48 rounded-lg self-center place-items-center'>
					<div className='stat-title'>Distance</div>
					<div className='stat-value'>
						<span>
							{stats.distance}
							<span>{stats.metric ? 'km' : 'mi'}</span>
						</span>
					</div>
				</div>
				<div className='grid grid-cols-2 md:flex md:flex-col gap-5 items-center p-3'>
					<div className='flex flex-col md:flex-row gap-3'>
						<div className='stat border-2 md:w-48 rounded-lg place-items-center'>
							<div className='stat-title'>Time</div>
							<div className='stat-value'>10min</div>
						</div>
						<div className='stat border-2 md:w-48 rounded-lg place-items-center'>
							<div className='stat-title'>lbs of carbon</div>
							<div className='stat-value'>{stats.carCarbon}</div>
						</div>
						<div className='stat border-2 md:w-48 rounded-lg place-items-center'>
							<div className='stat-title'>Cost</div>
							<div className='stat-value'>
								{stats.cost > 0 ? `$${stats.cost}` : '--'}
							</div>
							<div className='stat-desc'>Based on 25mpg</div>
						</div>
					</div>
					<div className='flex flex-col md:flex-row gap-3'>
						<div className='stat border-2 md:w-48 rounded-lg place-items-center'>
							<div className='stat-title'>Time</div>
							<div className='stat-value'>10min</div>
						</div>
						<div className='stat border-2 md:w-48 rounded-lg place-items-center'>
							<div className='stat-title'>lbs of carbon</div>
							<div className='stat-value text-secondary'>{stats.carbon}</div>
						</div>

						<div className='stat border-2 md:w-48 rounded-lg place-items-center'>
							<div className='stat-title'>Cost</div>
							<div className='stat-value'>$0.00</div>
							<div className='stat-desc'>Other than fit legs!</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Converter;
