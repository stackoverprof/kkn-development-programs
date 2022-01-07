import React from 'react';
import useClearance from '@core/hooks/useClearance';
import AlertHandler from '@components/_shared/AlertHandler';
import SEOTags from '@components/_shared/SEOTags';
import { useLayout } from '@core/contexts';

interface Props {
	children: React.ReactNode
	title?: string
	className?: string
	style?: React.CSSProperties
}

const MainLayout = ({children, title, className, style}: Props): JSX.Element => {
	const [minHeight, upperRef, lowerRef] = useClearance();
	const { AlertValue } = useLayout();

	return (
		<>
			<SEOTags title={title} />

			<header ref={upperRef}>
				{/* Navbar things */}
			</header>

			<main style={{minHeight, ...style}} className={className}>
				{children}
			</main>

			<footer ref={lowerRef}>
				{/* Footer things */}
			</footer>

			{AlertValue && <AlertHandler key={Date.now()} />}
		</>
	);
};

export default MainLayout;
