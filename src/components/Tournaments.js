import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Trophy, Users } from 'lucide-react'

const mockTournaments = [
  {
    id: 1,
    title: "Mayez Championship 2025",
    type: "Championship",
    date: "June 15-18, 2025",
    location: "Las Vegas, NV",
    prize: "$50,000",
    participants: 128,
    status: "Upcoming",
    image: "https://images.pexels.com/photos/16074/pexels-photo.jpg",
    color: "from-red-600 to-red-800"
  },
  {
    id: 2,
    title: "Elite Pool Masters",
    type: "Masters",
    date: "July 10-12, 2025",
    location: "New York, NY",
    prize: "$35,000",
    participants: 64,
    status: "Registration Open",
    image: "https://images.unsplash.com/photo-1599685315659-bc876da49fe5",
    color: "from-blue-600 to-blue-800"
  },
  {
    id: 3,
    title: "Pro Series Finals",
    type: "Pro Series",
    date: "August 5-7, 2025",
    location: "Chicago, IL",
    prize: "$75,000",
    participants: 32,
    status: "Qualifiers Ongoing",
    image: "https://images.pexels.com/photos/10627147/pexels-photo-10627147.jpeg",
    color: "from-green-600 to-green-800"
  },
  {
    id: 4,
    title: "Women's Championship",
    type: "Women's Pro",
    date: "September 20-22, 2025",
    location: "Miami, FL",
    prize: "$40,000",
    participants: 64,
    status: "Coming Soon",
    image: "https://images.pexels.com/photos/2017868/pexels-photo-2017868.jpeg",
    color: "from-purple-600 to-purple-800"
  },
  {
    id: 5,
    title: "Seniors League Cup",
    type: "Seniors",
    date: "October 15-17, 2025",
    location: "Phoenix, AZ",
    prize: "$25,000",
    participants: 96,
    status: "Registration Open",
    image: "https://images.unsplash.com/photo-1575553939928-d03b21323afe",
    color: "from-orange-600 to-orange-800"
  },
  {
    id: 6,
    title: "Youth Championship",
    type: "Youth",
    date: "November 12-14, 2025",
    location: "Orlando, FL",
    prize: "$15,000",
    participants: 128,
    status: "Registration Open",
    image: "https://images.pexels.com/photos/6253681/pexels-photo-6253681.jpeg",
    color: "from-cyan-600 to-cyan-800"
  }
];


// Tournament Card Component
const TournamentCard = ({ tournament, index }) => {
  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
    >
      <div className="relative rounded-lg overflow-hidden">
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${tournament.color} opacity-80`}
        />
        <img 
          src={tournament.image} 
          alt={tournament.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <div>
            <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
              {tournament.type}
            </span>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-2xl mb-2">
              {tournament.title}
            </h3>
            <div className="space-y-2">
              <div className="flex items-center text-white/90">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">{tournament.date}</span>
              </div>
              <div className="flex items-center text-white/90">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">{tournament.location}</span>
              </div>
              <div className="flex items-center text-white/90">
                <Trophy className="h-4 w-4 mr-2" />
                <span className="text-sm">{tournament.prize}</span>
              </div>
              <div className="flex items-center text-white/90">
                <Users className="h-4 w-4 mr-2" />
                <span className="text-sm">{tournament.participants} Players</span>
              </div>
            </div>
            <div className="mt-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                tournament.status === 'Upcoming' ? 'bg-blue-600 text-white' :
                tournament.status === 'Registration Open' ? 'bg-green-600 text-white' :
                tournament.status === 'Qualifiers Ongoing' ? 'bg-yellow-600 text-black' :
                'bg-gray-600 text-white'
              }`}>
                {tournament.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function Tournaments() {
  return (
    <div>
    <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
            className="text-4xl font-bold text-white text-center mb-12 mt-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            >
            TOURNAMENTS
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockTournaments.map((tournament, index) => (
                <TournamentCard key={tournament.id} tournament={tournament} index={index} />
            ))}
            </div>
        </div>
    </section>

    {/* Footer */}
    <footer className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2">
            <div className="text-white font-bold text-2xl mb-4">
                MAYEZ<span className="text-red-500">TOURNAMENT</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
                The premier pool tournament organization, bringing you the most exciting and competitive pool championships worldwide.
            </p>
            <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-sm">f</span>
                </div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-sm">t</span>
                </div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-sm">i</span>
                </div>
                </a>
            </div>
            </div>

            {/* Quick Links */}
            <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
                {['Tournaments', 'Players', 'Rules', 'Calendar', 'Live Scoring'].map((link) => (
                <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                    </a>
                </li>
                ))}
            </ul>
            </div>

            {/* Contact */}
            <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
                <li>info@mayeztournament.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Tournament Ave<br />Las Vegas, NV 89101</li>
            </ul>
            </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
                © 2025 Mayez Tournament. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
                </a>
            </div>
            </div>
        </div>
        </div>
    </footer>
    </div>
  )
}

export default Tournaments