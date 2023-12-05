import '@/styles/globals.css'
import Layout from '@/components/Layout';
import ThreeDaysWeatherResult from '@/components/ThreeDays';

export default function HomePage() {
    return (
        <Layout>
            <ThreeDaysWeatherResult />
        </Layout>
            
    )
}