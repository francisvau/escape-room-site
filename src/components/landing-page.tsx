'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Menu, X } from "lucide-react"

export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 relative overflow-x-hidden">
      {/* Fog effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 opacity-50">
          <svg className='h-full w-full' xmlns="http://www.w3.org/2000/svg">
            <filter id="fog">
              <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="5" />
              <feDisplacementMap in="SourceGraphic" scale="180" />
            </filter>
            <rect width="100%" height="100%" filter="url(#fog)" />
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 bg-gray-800 bg-opacity-90 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold">Graveyard Escape</div>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="hover:text-purple-400 transition-colors">Teambuilding</a>
              <a href="#" className="hover:text-purple-400 transition-colors">FAQ</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Locations</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Contact</a>
              <a href="#" className="hover:text-purple-400 transition-colors">About</a>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 bg-opacity-90">
            <a href="#" className="block py-2 px-4 hover:bg-gray-700">Teambuilding</a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700">FAQ</a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700">Locations</a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700">Contact</a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700">About</a>
          </div>
        )}
      </nav>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-100 drop-shadow-lg">
            Graveyard Escape
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Can you unravel the mysteries of the abandoned cemetery and escape before time runs out? Your wits are your only ally in this chilling adventure.
          </p>
          <Button className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-200 transform hover:scale-105">
            Book Your Escape Now
          </Button>
        </section>

        {/* About Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">About Our Escape Room</h2>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
            <p className="mb-4">
              Step into the shoes of a paranormal investigator trapped in an ancient, haunted graveyard. With only 60 minutes on the clock, you must solve a series of cryptic puzzles, decipher ghostly messages, and uncover long-buried secrets to find your way out.
            </p>
            <p className="mb-4">
              Our state-of-the-art escape room features immersive sound effects, spine-chilling props, and cutting-edge technology to create a truly unforgettable experience. Are you brave enough to face the spirits and escape the Graveyard?
            </p>
            <p>
              Perfect for thrill-seekers, puzzle enthusiasts, and anyone looking for a unique and exciting challenge. Gather your team of 2-6 players and test your wits against our most hair-raising adventure yet!
            </p>
          </div>
        </section>

        {/* Opening Hours Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Opening Hours</h2>
          <Card className="bg-gray-800 bg-opacity-50">
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-gray-100">Day</TableHead>
                    <TableHead className="text-gray-100">Hours</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Monday - Thursday</TableCell>
                    <TableCell>2:00 PM - 10:00 PM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Friday</TableCell>
                    <TableCell>2:00 PM - 12:00 AM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Saturday</TableCell>
                    <TableCell>12:00 PM - 12:00 AM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sunday</TableCell>
                    <TableCell>12:00 PM - 10:00 PM</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Pricing Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gray-800 bg-opacity-50">
              <CardHeader>
                <CardTitle className="text-center">Weekday Special</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-center mb-4">$25<span className="text-lg font-normal">/person</span></p>
                <ul className="list-disc list-inside">
                  <li>Valid Monday - Thursday</li>
                  <li>Minimum 2 players</li>
                  <li>60-minute experience</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 bg-opacity-50">
              <CardHeader>
                <CardTitle className="text-center">Weekend Adventure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-center mb-4">$35<span className="text-lg font-normal">/person</span></p>
                <ul className="list-disc list-inside">
                  <li>Valid Friday - Sunday</li>
                  <li>Minimum 2 players</li>
                  <li>60-minute experience</li>
                  <li>Exclusive weekend puzzles</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 bg-opacity-50">
              <CardHeader>
                <CardTitle className="text-center">Private Event</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-center mb-4">$180</p>
                <ul className="list-disc list-inside">
                  <li>Exclusive room booking</li>
                  <li>Up to 6 players</li>
                  <li>60-minute experience</li>
                  <li>Available any day</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Face Your Fears?</h2>
          <Button className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-200 transform hover:scale-105">
            Book Your Graveyard Escape Now
          </Button>
        </section>
      </div>

      {/* Tombstones */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-around pointer-events-none">
        <div className="w-20 h-32 bg-gray-700 rounded-t-lg transform -rotate-6"></div>
        <div className="w-24 h-40 bg-gray-600 rounded-t-lg"></div>
        <div className="w-20 h-36 bg-gray-700 rounded-t-lg transform rotate-6"></div>
      </div>
    </div>
  )
}