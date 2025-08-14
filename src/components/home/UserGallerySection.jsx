import SectionHeader from "@/components/common/SectionHeader"
import Slider from "@/components/common/Slider/Slider"
import PhotoCard from "@/components/common/PhotoCard"

const UserGallerySection = ({ items }) => {
    return (
        <section>
        <SectionHeader
            title="Everlane On You"
            subtitle="Share your latest look with #EverlaneOnYou for a chance to be featured."
            ctaText="Add Your Photo"
            ctaLink="#"
        />
        <Slider
            items={items}
            slidesPerView={4}
            renderItem={(item) => <PhotoCard image={item.image} />}
        />
        </section>
    )
}

export default UserGallerySection