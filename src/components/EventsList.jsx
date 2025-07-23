import React from 'react';
import './EventsList.css';

const events = [
  {
    id: 1,
    title: 'Biogas Lights Up Lives',
    date: '2025-06-23',
    location: 'Bihar',
    description: 'Over two dozen homes in Fatehpur village, Bihar, are now cooking with clean biogas thanks to the launch of the Govardhan Yojana. Powered by cow dung, this sustainable initiative is transforming rural lives by providing renewable energy and organic fertilizer.',
    image: '/Blogs/goverdhan_yojana.jpeg',
  },
  {
    id: 2,
    title: 'Ensuring Clean Water for Every Girl',
    date: '2024-08-05',
    location: 'G.T. Road, Asansol',
    description: 'Asha Kiran grd donated 4 water purifiers to St. Mary Goretti Girls’ Primary School in Asansol, ensuring access to clean drinking water for hundreds of students. This initiative reflects our commitment to health, education, and dignity for every child.',
    image: '/Blogs/water_coller_implantation.jpeg',
  },
  {
    id: 4,
    title: 'Vermi Compost Units for Organic Growth',
    date: '2025-07-05',
    location: 'Ganwa, Jharkhand',
    description: 'Under the Godhan Nyay Yojana, Kamlesh Kumar from Asha Kiran, Giridih, was selected to set up 4 permanent vermi compost units. This initiative promotes organic farming, waste recycling, and rural employment in partnership with local FPOs and SHGs.',
    image: '/Blogs/gobar_gas_plant.jpeg',
  }
  ];

const EventsList = () => (
  <section className="events-list-section">
    <div className="events-list-container">
      {events.map(event => (
        <div className="event-card" key={event.id}>
          <div className="event-card-image-wrapper">
            <img src={event.image} alt={event.title} className="event-card-image" loading="lazy" />
          </div>
          <div className="event-card-content">
            <h2 className="event-card-title">{event.title}</h2>
            <div className="event-card-meta">
              <span className="event-card-date"><i className="bi bi-calendar-event"></i> {new Date(event.date).toLocaleDateString()}</span>
              <span className="event-card-location"><i className="bi bi-geo-alt"></i> {event.location}</span>
            </div>
            <p className="event-card-description">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default EventsList; 