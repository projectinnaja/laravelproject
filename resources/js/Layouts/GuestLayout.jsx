import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className='absolute top-0 right-0 left-0 bg-white min-h-[80px]'>
            <div className='max-w-7xl bg-red-500 flex items-center justify-between h-full'></div>
        </div>
    );
}
