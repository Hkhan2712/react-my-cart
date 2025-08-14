import Button from '@/components/ui/Button'
import backgroundImage from '../../../public/images/banner.jpg' 

const Banner = () => {
    return (
        <section className='p-5'>
            <div
            className="banner text-white d-flex align-items-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '400px',
            }}
            >
            <div className="container text-center">
                <h2 className="display-5 fs-1">
                We’re on a Mission To Clean Up the Industry
                </h2>
                <p className="lead mb-4 fs-5">
                Read about our progress in our latest Impact Report.
                </p>
                <Button href="/impact-report">Read More</Button>
            </div>
            </div>
        </section>
    )
}

export default Banner
