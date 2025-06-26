import React from 'react';
import './EventsList.css';

const events = [
  {
    id: 1,
    title: 'Biogas Lights Up Lives',
    date: '2025-06-23',
    location: 'Bihar',
    description: 'Over two dozen homes in Fatehpur village, Bihar, are now cooking with clean biogas thanks to the launch of the Govardhan Yojana. Powered by cow dung, this sustainable initiative is transforming rural lives by providing renewable energy and organic fertilizer.',
    image: '/Blogs/goverdhan_yojana.png',
  },
  {
    id: 2,
    title: 'Ensuring Clean Water for Every Girl',
    date: '2024-08-05',
    location: 'G.T. Road, Asansol',
    description: 'Asha Kiran GRD donated 4 water purifiers to St. Mary Goretti Girls’ Primary School in Asansol, ensuring access to clean drinking water for hundreds of students. This initiative reflects our commitment to health, education, and dignity for every child.',
    image: '/Blogs/water_coller_implantation.png',
  },
  {
    id: 3,
    title: 'Women Empowerment Workshop',
    date: '2024-09-10',
    location: 'Asha Kiran GRD Center, Dehradun',
    description: 'A workshop focused on skill development, self-confidence, and entrepreneurship for women in our community.',
    image: '/Gallery_Component/image3.png',
  },
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