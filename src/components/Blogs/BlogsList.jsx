import React, { useState } from 'react';
import './BlogsList.css';
import BlogModal from './BlogModal';
import BlogCategories from './BlogCategories';

const blogs = [
  {
    "id": 1,
    "title": "Biogas Lights Up Lives: Over Two Dozen Homes Now Cook with Cow Dung-Based Fuel in Fatehpur",
    "subtitle": "Govardhan Yojana brings sustainable cooking fuel to rural Bihar",
    "description": "In a major step towards rural sustainability and clean energy, the Govardhan Yojana has officially launched in Fatehpur village...",
    "image": "/Blogs//goverdhan_yojana.jpeg",
    "date": "2025-06-23",
    "author": "Asha Kiran grd Team",
    "category": "Volunteering", 
    // "blog_content": "In a major step towards rural sustainability and clean energy, the Govardhan Yojana has officially launched in Fatehpur village, under Kachuasoli Panchayat of Palojori block in Bihar. With this, nearly two dozen households have begun cooking meals using biogas stoves powered entirely by cow dung.\n\nThis initiative is a part of the Swachh Bharat Mission (Gramin) and aims to reduce dependence on LPG and firewood, offering a clean, renewable, and low-cost cooking solution for rural families.\n\nThe newly inaugurated biogas plant has a capacity of 40 cubic meters and will supply clean gas to 22 households in the village. Each family can now cook two meals a day using gas generated from the cow dung they contribute—at no monetary cost. All they have to do is provide cow dung as their community contribution. The initiative not only ensures sustainable cooking but also results in the production of organic manure, benefiting local farmers and soil health.\n\nThe project site was generously donated by Mr. Munnilal Mahto, who inaugurated the plant. The event was chaired by Panchayat Mukhia Mr. Kumar Rajiv Ranjan, who expressed his gratitude to the Drinking Water and Sanitation Division, Madhupur, for selecting their village for this forward-thinking initiative.\n\nDistrict Coordinator Mr. Pankaj Bhushan Pathak highlighted that Fatehpur is the only village in the entire division to benefit from the Govardhan Yojana so far. He emphasized that the villagers are not only getting clean fuel but also an eco-friendly source of organic fertilizer, which will enhance agricultural productivity.\n\nA user committee has been formed to manage the plant’s daily operations. Community involvement is at the heart of this project, ensuring its long-term sustainability and local empowerment. On this occasion, sports materials were also distributed among local children, adding joy and inclusion to the day’s celebrations.\n\nSeveral dignitaries and members of the Asha Kiran grd team were present at the launch, including Reena Toppo (District Consultant), Rajkishore Mahto (Junior Engineer), Kamlesh Kumar (Secretary, Asha Kiran grd), Asha Sharma (President), Sheetal Solanki, Mithilesh Kumar, Rekha Sharma, Rama Shankar Gupta, Dilip, and many other supporters.\n\nThis project is a shining example of how simple, low-tech, and community-based solutions can change lives. Asha Kiran grd is proud to be part of such a transformational journey that combines clean energy, organic farming, and public health into a single impactful initiative."
  },  
  {
    "id": 2,
    "title": "Ensuring Clean Water for Every Girl: Asha Kiran grd Donates Purifiers to St. Mary Goretti School",
    "subtitle": "Four Aquaguard Purifiers Installed for Safe Drinking Water in Asansol, West Bengal",
    description: "Asha Kiran grd donated 4 water purifiers to St. Mary Goretti Girls Primary School in Asansol, ensuring access to clean drinking water for hundreds of students.",
    // "blog_content": "Asha Kiran grd proudly contributed 4 units of Eureka Forbes Aquaguard Pro Purechill 80 PSS UV water purifiers to St. Mary Goretti Girls’ Primary School, located on G.T. Road, Asansol, West Bengal. This thoughtful donation ensures that hundreds of young girls now have daily access to safe and clean drinking water, directly improving their health, concentration, and overall school experience.\n\nThe school’s administration warmly thanked the NGO for this generous gesture, noting that it will significantly improve the well-being of both students and staff. The initiative reflects Asha Kiran grd’s mission to uplift communities through health, sanitation, and education support—especially in underserved areas. \n\nWe believe that clean water is a basic right, not a privilege, and we are honored to partner with schools like St. Mary Goretti to make that right a reality. We thank our supporters and donors who made this initiative possible.",
    "image": "/Blogs/water_coller_implantation.jpeg",
    "date": "2025-06-26",
    "author": "Asha Kiran grd Team",
    "category": "Education"
  },
  
  {
    id: 3,
    title: 'A Day in the Life: Volunteering at Asha Kiran',
    subtitle: 'Experience the impact first-hand',
    description: 'Step into the shoes of our volunteers and see how a single day at Asha Kiran grd can make a world of difference.',
    image: '/Gallery_Component/image7.jpeg',
    date: '2024-05-10',
    author: 'Rahul Verma',
    category: 'Events',
  },
];

const BlogsList = () => {
  const [openBlog, setOpenBlog] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBlogs = selectedCategory === 'All'
    ? blogs
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <section className="blogs-list-section">
      <BlogCategories
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <div className="blogs-list-container">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <div className="blog-card-image-wrapper">
                <img src={blog.image} alt={blog.title} className="blog-card-image" loading="lazy" />
              </div>
              <div className="blog-card-content">
                <h2 className="blog-card-title">{blog.title}</h2>
                <h3 className="blog-card-subtitle">{blog.subtitle}</h3>
                <p className="blog-card-description">{blog.description}</p>
                <div className="blog-card-meta">
                  <span className="blog-card-author">By {blog.author}</span>
                  <span className="blog-card-date">{new Date(blog.date).toLocaleDateString()}</span>
                </div>
                <button className="blog-card-readmore" onClick={() => setOpenBlog(blog)}>Read More</button>
              </div>
            </div>
          ))
        ) : (
          <div className="blog-card blog-card-placeholder">
            <div className="blog-card-content blog-card-placeholder-content">
              <span className="blog-card-placeholder-text">No blogs found for this category.</span>
            </div>
          </div>
        )}
      </div>
      <BlogModal open={!!openBlog} blog={openBlog} onClose={() => setOpenBlog(null)} />
    </section>
  );
};

export default BlogsList; 