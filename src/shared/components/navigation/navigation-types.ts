export interface NavigationItem {
	href: string;
	pageTitle: string;
}

export interface NavigationProps {
	navigation: NavigationItem[];
}

export interface NavigationShellProps {
	navigation: NavigationItem[];
}

export interface NavigationLinkProps extends NavigationItem {
	isCurrent?: boolean;
	onClick?: () => void;
}

export interface MobileNavigationButtonProps {
	isOpen: boolean;
	onClick: () => void;
}

export interface DesktopNavigationProps {
	currentPath: string;
	navigation: NavigationItem[];
}
