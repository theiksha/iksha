import { goto } from '$app/navigation';

export function protectRoute(requiredRole = null) {
	const session = sessionStorage.getItem('user');

	if (!session) {
		goto('/samiksha/login');
		return null;
	}

	const user = JSON.parse(session);

	// ⏱️ expiry check
	if (Date.now() > user.expiry) {
		sessionStorage.clear();
		goto('/samiksha/login');
		return null;
	}

	// 🔐 role check
	if (requiredRole && user.role !== requiredRole) {
		goto('/samiksha/login');
		return null;
	}

	return user;
}
