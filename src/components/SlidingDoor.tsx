export default function SlidingDoor() {
	return (
		<div className='door-container'>
			<div className='door'>
				<div className='door-left door-frame'>
					<div className='door-handle door-handle-left'></div>
					<div className='door-glass door-glass-left'></div>
					<div className='door-dark-glass door-dark-glass-left'></div>
				</div>
				<div className='door-right door-frame'>
					<div className='door-handle door-handle-right'></div>
					<div className='door-glass door-glass-right'></div>
					<div className='door-dark-glass door-dark-glass-right'></div>
				</div>
			</div>
		</div>
	);
}
