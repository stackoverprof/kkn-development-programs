import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MdClose } from 'react-icons/md';
import { useLayout } from '@core/contexts';

export type EnumType = 'info' | 'danger' | 'success' | 'warning'

const AlertHandler = (): JSX.Element => {
	const [hold, setHold] = useState(false);
	
	const { AlertValue, resetAlert } = useLayout();

	if (!AlertValue) return <></>;

	const { message, type = 'info' } = AlertValue;

	useEffect(() => {
		const AutoClose = setTimeout(resetAlert, 7000);
		if (hold) clearTimeout(AutoClose);
		return () => {
			clearTimeout(AutoClose);
		};
	}, [hold]);
	
	const router = useRouter();
	
	useEffect(() => {
		router.events.on('routeChangeStart', resetAlert);
	
		return () => {
			router.events.off('routeChangeStart', resetAlert);
		};
	}, []);

	const theme = {
		info: 'bg-info text-white',
		danger: 'bg-danger text-white',
		success: 'bg-success text-white',
		warning: 'bg-warning text-black',
	};

	return (
		<div className="fixed flex-cc w-full bottom-6 px-2" style={{zIndex: 1000, marginBottom: 'env(safe-area-inset-bottom)'}}>
			<div
				className={['relative px-3 pt-2 pb-3 overflow-hidden rounded flex-bc', theme[type], !hold && 'animate-fade'].join(' ')}
				style={{zIndex: 999}}
				onClick={() => setHold(true)}
				onMouseEnter={() => setHold(true)}
			>
				<p>{message}</p>
				<i className="ml-4 cursor-pointer hover:bg-black hover:bg-opacity-10" onClick={resetAlert}>
					<MdClose />
				</i>

				<div className="absolute bottom-0 right-0 w-full flex-sc h-1 bg-black bg-opacity-20">
					<div className={['h-full bg-black bg-opacity-50', hold ? 'w-full bg-opacity-20' : 'animate-shrink'].join(' ')}></div>
				</div>
			</div>

			<style jsx>{`
				.animate-fade {
					animation-name: fade;
					animation-duration: 7s;
					animation-timing-function: ease-in;
				}
				@keyframes fade {
					0% { opacity: 1; }
					85% { opacity: 1; }
					100% { opacity: 0; }
				}
				.animate-shrink {
					animation-name: shrink;
					animation-duration: 7s;
					animation-timing-function: ease-in;
				}
				@keyframes shrink {
					from { width: 100%; }
					to { width: 0%; }
				}
			`}</style>
		</div>
	);
};

export default AlertHandler;