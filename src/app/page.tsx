'use client'

import { useState } from 'react'
import { Search, ShoppingBag, Utensils, Coffee, Gift } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { name: 'Restaurantes', icon: Utensils },
    { name: 'Cafeterías', icon: Coffee },
    { name: 'Regalos', icon: Gift },
    { name: 'Tiendas', icon: ShoppingBag },
  ]

  const featuredBusinesses = [
    { name: 'La Cevichería', type: 'Restaurante', image: 'https://placehold.co/200x400' },
    { name: 'Café del Muelle', type: 'Cafetería', image: 'https://placehold.co/200x400' },
    { name: 'Joyería Caribe', type: 'Tienda', image: 'https://placehold.co/200x400' },
    { name: 'Dulces de Marta', type: 'Tienda', image: 'https://placehold.co/200x400' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">LocalTrust</h1>
          <nav className = "space-x-1">
            <Button variant="link">Inicio</Button>
            <Button variant="link">Categorías</Button>
            <Button variant="link">Negocios</Button>
            <Button variant="link">Acerca de nosotros</Button>
          </nav>
          <nav className="space-x-2">
            <Button variant="ghost">Iniciar sesión</Button>
            <Button>Registrarse</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        <section>
          <h2 className="text-4xl font-bold mb-6">Descubre negocios locales en Cartagena</h2>
          <div className="flex gap-2 max-w-2xl">
            <Input
              type="text"
              placeholder="Buscar negocios, productos o servicios"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow bg-background"
            />
            <Button>
              <Search className="mr-2 h-4 w-4" />
              Buscar
            </Button>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-6">Categorías populares</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant="outline"
                className="h-auto py-8 flex flex-col items-center justify-center hover:bg-muted"
              >
                <category.icon className="h-8 w-8 mb-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-6">Negocios destacados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBusinesses.map((business) => (
              <Card key={business.name} className="overflow-hidden">
                <img
                  src={business.image}
                  alt={business.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h4 className="font-semibold text-lg">{business.name}</h4>
                  <p className="text-muted-foreground">{business.type}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>&copy; 2024 FourW4rd. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}