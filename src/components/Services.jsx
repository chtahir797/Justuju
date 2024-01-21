
import './Services.css'
import partyImage from '../assets/party.jpg';
const servicesData = [
    {
        id: 1,
        title: 'Event Planning',
        image: partyImage,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget urna at lectus convallis cursus.',
    },
    {
        id: 2,
        title: 'Venue Decoration',
        image: partyImage,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget urna at lectus convallis cursus.',
    },
    {
        id: 3,
        title: 'Guest Management',
        image: partyImage,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget urna at lectus convallis cursus.',
    },
    {
        id: 4,
        title: 'Entertainment',
        image: partyImage,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget urna at lectus convallis cursus.',
    },
    {
        id: 5,
        title: 'Logistics',
        image: partyImage,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget urna at lectus convallis cursus.',
    },
    {
        id: 6,
        title: 'Technical Support',
        image: partyImage,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget urna at lectus convallis cursus.',
    },
];
const Services = () => {

    return (
        <>
            <div>
                <div className="service-heading">
                    <h1>Our Services</h1>
                </div>
                <div className="services-container">
                    {servicesData.map((service) => (
                        <div className="service-card" key={service.id}>
                            <img className="service-image" src={service.image} alt={service.title} />
                            <div className="service-content">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Services