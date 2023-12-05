import '@/styles/globals.css'
import Layout from '@/components/Layout';
import WeatherResult from '@/components/OneDay';

export default function HomePage() {
    return (
        <Layout>
            <WeatherResult />
        </Layout>
            
    )
}