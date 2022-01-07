import { useState } from 'react';
import { EnumType } from '@components/_shared/AlertHandler';
import { AlertType, LayoutStoreType } from './layout.types';

const LayoutStore = (): LayoutStoreType => {
	const [AlertValue, setAlertValue] = useState<AlertType | null>(null);

	const resetAlert = () => setAlertValue(null);

	const Alert = (message: string, type?: EnumType) => {
		setAlertValue({message, type});
	};

	return {
		AlertValue,
		Alert,
		resetAlert,
	};
};

export default LayoutStore;
