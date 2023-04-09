import { createBrowserRouter } from 'react-router-dom'
import Test from '@/components/pages/test/Test'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Test />
	}
])
